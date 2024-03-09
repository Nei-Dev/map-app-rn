import { Platform, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from "../../components/maps/Map";
import { getCurrentLocation } from "../../../actions/location/location";
import useLocationStore from "../../store/location/useLocationStore";
import { LoadingScreen } from "../loading/LoadingScreen";

const MapScreen = () => {

    const { lastKnownLocation, getLocation } = useLocationStore();

    useEffect(() => {
        if (lastKnownLocation === null) {
            getLocation();
        }

    }, [ ]);


    if (lastKnownLocation === null) {
        return <LoadingScreen />;
    }


    return (
        <View style={styles.container}>
            <Map
                initialLocation={lastKnownLocation}
            />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,

    },
});