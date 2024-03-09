import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Location } from "../../../infraestructure/interfaces/location";
import FAB from "../ui/FAB";
import useLocationStore from "../../store/location/useLocationStore";

interface Props {
    showsUserLocation?: boolean;
    initialLocation: Location;
}

const Map = ({ showsUserLocation = true, initialLocation }: Props) => {

    const mapRef = useRef<MapView>();
    const cameraLocation = useRef<Location>(initialLocation);

    const {getLocation} = useLocationStore();

    const moveCameraLocation = (location: Location) => {
        if(!mapRef.current) return;

        mapRef.current.animateCamera({center: location, zoom: 15});
    }

    const moveToCurrentLocation = async () => {
        const location = await getLocation();
        if(!location) return;
        moveCameraLocation(location);
    }


    return (
        <View
            style={{
                height: 'auto',
                width: 'auto',
                justifyContent: 'flex-end',
                alignItems: 'center',
                ...StyleSheet.absoluteFillObject
            }}
        >
            <MapView
                ref={(map) => mapRef.current = map!}
                showsUserLocation={showsUserLocation} // Just for Android
                provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ ...StyleSheet.absoluteFillObject }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    // latitude: cameraLocation.current.latitude,
                    // longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: cameraLocation.current.latitude,
                        longitude: cameraLocation.current.longitude,
                    }}
                    title="This is a marker"
                    description="This is a marker example"
                />
            </MapView>

            <FAB
                iconName="gps-fixed"
                onPress={moveToCurrentLocation}
                style={{
                    bottom: 20,
                    right: 20,
                }}
            />
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({});