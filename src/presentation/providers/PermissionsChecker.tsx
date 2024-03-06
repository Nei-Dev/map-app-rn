import { AppState, StyleSheet, Text, View } from 'react-native';
import React, { Children, PropsWithChildren, useEffect } from 'react';
import { usePermissionStore } from "../store/permissions/usePermissionStore";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";

const PermissionsChecker = ({ children }: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission, requestLocationPermission } = usePermissionStore();
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        if(locationStatus === 'granted'){
            navigation.reset({
                // index: 0, // If u wanna have more screens in the stack, u can use this
                routes: [
                    { name: 'MapScreen' }
                ]
            });
            // navigation.navigate('MapScreen');
        } else if(locationStatus !== 'unknown'){
            navigation.reset({
                routes: [
                    { name: 'PermissionsScreen' }
                ]
            });
            // navigation.navigate('PermissionsScreen');
        }
    }, [locationStatus])

    useEffect(()=>{
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if(nextAppState === 'active') {
                checkLocationPermission();
            }
        });

        return () => {
            subscription.remove();
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default PermissionsChecker;

const styles = StyleSheet.create({});