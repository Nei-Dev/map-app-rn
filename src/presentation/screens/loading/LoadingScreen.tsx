import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const LoadingScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
});