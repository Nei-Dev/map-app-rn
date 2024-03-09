import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Location } from "../../../infraestructure/interfaces/location";
import { getCurrentLocation } from "../../../actions/location/location";
import { create } from "zustand";

interface LocationState {
    
    lastKnownLocation: Location | null;


    getLocation: () => Promise<Location | null>;
}

const useLocationStore = create<LocationState>()((set, get) => ({

    lastKnownLocation: null,


    getLocation: async () => {
        try {
            const location = await getCurrentLocation();
            set({ lastKnownLocation: location });
            return location;
        } catch (error) {
            console.error(`Can't get location`, error);
            return null;
        }
    }
}))

export default useLocationStore;
