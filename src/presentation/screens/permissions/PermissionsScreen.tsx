import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { checkLocationPermission } from '../../../actions/permissions/location';
import { usePermissionStore } from "../../store/permissions/usePermissionStore";

const PermissionsScreen = () => {

    const { locationStatus, checkLocationPermission, requestLocationPermission } = usePermissionStore();

    return (
        <View 
            style={styles.container}
        >
            <Text
                style={styles.text}
            >Location</Text>

            <Pressable
                style={styles.button}
                onPress={async () => {
                    await requestLocationPermission();
                }}
            >
                <Text
                    style={styles.buttonText}
                >Enable Location</Text>
            </Pressable>

            <Text
                style={{
                    ...styles.text,
                    marginTop: 20    
                }}
            >Actual State: {locationStatus}</Text>
        </View>
    );
};

export default PermissionsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        backgroundColor: '#aaa',
        padding: 20,
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
});