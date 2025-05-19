import { fetchActivitiesFailedStatus, fetchActivitiesLoadingStatus, fetchActivitiesSuccessedStatus, selectActivitiesIdleStatus } from "@/store/slices/activities.slice";
import { AppThunk } from "@/store/store";
import {z} from 'zod';

const ActivityScema = z.object({
    id: z.number(),
    name: z.string(),
})

export type ActivityType = z.infer<typeof ActivityScema>;

export const fetchActivities = (): AppThunk => async (dispatch, getState, { api }) => {
    
    const isIdle = selectActivitiesIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchActivitiesLoadingStatus());

    try {
        const res = await api.get('activity');

        const data = res.data;

        const result = ActivityScema.array().safeParse(data);

        if (!result.success) {
            dispatch(fetchActivitiesFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fetchActivitiesSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fetchActivitiesFailedStatus(errorMessage));
    }
};


