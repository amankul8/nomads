import { fatchStationsFailedStatus, fatchStationsIdleStatus, fatchStationsLoadingStatus, fatchStationsSuccessedStatus, selectStationsIdleStatus
 } from "@/store/slices/stations.slice";
import {type AppThunk } from "@/store/type";
import {z} from 'zod';

const StationSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    region_id: z.number(),
    coordinates: z.array(z.number())
})

export type StationType = z.infer<typeof StationSchema>;

export const fetchStations = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    
    const isIdle = selectStationsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fatchStationsLoadingStatus());

    try {
        const res = await apiClient.getClient().get('data/locations/stations.json');
        const data = res.data;
        const result = StationSchema.array().safeParse(data);

        if (!result.success) {
            dispatch(fatchStationsFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fatchStationsSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fatchStationsFailedStatus(errorMessage));
    }
};