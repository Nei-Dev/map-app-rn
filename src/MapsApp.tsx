import 'react-native-gesture-handler';

import {enableLatestRenderer} from 'react-native-maps'; 
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNavigator from "./presentation/navigation/StackNavigator";
import PermissionsChecker from "./presentation/providers/PermissionsChecker";

enableLatestRenderer();

const MapsApp = () => {
	return (
		<NavigationContainer>
			<PermissionsChecker>
				<StackNavigator />
			</PermissionsChecker>
		</NavigationContainer>
	);
};

export default MapsApp;

const styles = StyleSheet.create({});