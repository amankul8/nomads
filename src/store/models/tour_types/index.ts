import { fatchActivitiesFailedStatus, fatchActivitiesLoadingStatus, fatchActivitiesSuccessedStatus, selectActivitiesIdleStatus } from "@/store/slices/activities.slice";
import { AppThunk } from "@/store/store";
import {z} from 'zod';

const TourTypeScema = z.object({
    id: z.number(),
    name: z.string(),
    icon: z.string(),
})

export type TourTypeType = z.infer<typeof TourTypeScema>;

export const fetchTourTypes = (): AppThunk => async (dispatch, getState, { api }) => {
    
    const isIdle = selectActivitiesIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fatchActivitiesLoadingStatus());

    try {
        const res = await api.get('activity');
        const data = res.data;

        const result = TourTypeScema.array().safeParse(data);

        if (!result.success) {
            dispatch(fatchActivitiesFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fatchActivitiesSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fatchActivitiesFailedStatus(errorMessage));
    }
};


