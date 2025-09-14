import { fetchActivitiesFailedStatus, fetchActivitiesLoadingStatus, fetchActivitiesSuccessedStatus, selectActivitiesIdleStatus } from "@/store/slices/activities.slice";
import { AppThunk } from "@/store/type";
import {z} from 'zod';

const ActivitySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  images: z.array(
    z.object({
      url: z.string(),
      alt: z.string().optional()
    })
  ),
  video: z.array(z.any()).optional()
});

export type ActivityType = z.infer<typeof ActivitySchema>;

export const fetchActivities = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    
    const isIdle = selectActivitiesIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchActivitiesLoadingStatus());

    try {
        // const res = await api.get('activity');

        const res = await fetch('/data/activities.json');

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const data = await res.json();

        const result = ActivitySchema.array().safeParse(data);

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


