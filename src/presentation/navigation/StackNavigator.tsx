import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapScreen from "../screens/maps/MapScreen";
import PermissionsScreen from "../screens/permissions/PermissionsScreen";
import { LoadingScreen } from "../screens/loading/LoadingScreen";

export type RootStackParams = {
    MapScreen: undefined;
    PermissionsScreen: undefined;
    LoadingScreen: undefined;
}

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoadingScreen"
            // initialRouteName="PermissionsScreen"
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});