import { PermissionStatus } from "../../../infraestructure/interfaces/permissions";
import { requestLocationPermission, checkLocationPermission } from '../../../actions/permissions/location';
import { create } from "zustand";

interface PermissionsState {
    locationStatus: PermissionStatus;


    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;
}

export const usePermissionStore = create<PermissionsState>()( (set, get) => ({
    locationStatus: 'unknown',

    requestLocationPermission: async () => {
        const status = await requestLocationPermission();
        set({ locationStatus: status });
        return status;
    },

    checkLocationPermission: async () => {
        const status = await checkLocationPermission();
        set({ locationStatus: status });
        return status;
    }
}))
