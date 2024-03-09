import Geolocation from '@react-native-community/geolocation';
import { Location } from "../../infraestructure/interfaces/location";

// Geolocation.setRNConfiguration(config);
export const getCurrentLocation = async (): Promise<Location> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position: any) => {
                resolve({
                    // latitude: position.coords.latitude,
                    // longitude: position.coords.longitude,
                    latitude: 37.78825,
                    longitude: -122.4324,
                });
            },
            (error: any) => {
                console.error(`Can't get location`, error);
                reject(error);
            },
            { 
                enableHighAccuracy: true, 
                timeout: 15000, 
                maximumAge: 10000
            }
        );
    });
}