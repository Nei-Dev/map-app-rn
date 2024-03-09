import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons";

interface Props {
    iconName: string;
    style?: StyleProp<ViewStyle>;


    onPress: () => void;
}

const FAB = ({iconName, style, onPress}: Props) => {

    return (
        <View
            style={[styles.btn, style]}
        >
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1
                    },
                ]}
            >
                <Icon  
                    name={iconName}
                    size={30}
                    color="white"
                />
            </Pressable>
        </View>
    );
};

export default FAB;

const styles = StyleSheet.create({
    btn: {
        zIndex: 1,
        position: 'absolute',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 4.5,
            height: 0.27,
        },
        elevation: 10,
    }
});