import { } from "@/store/slices/activities.slice";
import { AppThunk } from "@/store/type";
import {z} from 'zod';
import { AccommodationSchema, HousingType } from "./type";
import { fetchAccommodationsFailedStatus, fetchAccommodationsLoadingStatus, fetchAccommodationsSuccessedStatus, selectAccommodationsIdleStatus } from "@/store/slices/accommodations";

export const housingTypeMap: Record<HousingType, string> = {
  1: 'Hotel',
  2: 'Guest House',
  3: 'Yurt Camp',
  4: 'Dormitory',
  5: 'Tent',
  6: 'Hostel',
  7: 'Glamping',
  8: 'Villa',
};
export const fetchAccommodations = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    
    const isIdle = selectAccommodationsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchAccommodationsLoadingStatus());

    try {
        const res = await fetch('/data/accommodations.json');

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const data = await res.json();

        const result = AccommodationSchema.array().safeParse(data);

        if (!result.success) {
            dispatch(fetchAccommodationsFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fetchAccommodationsSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fetchAccommodationsFailedStatus(errorMessage));
    }
};


