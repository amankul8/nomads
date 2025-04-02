import {z} from 'zod';
import { AppThunk } from '@/store/store';
import { fetchToursFailedStatus, fetchToursLoadingStatus, fetchToursSuccessedStatus, selectToursIdleStatus } from '@/store/slices/tours.slice';

export const TourSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    price: z.number(),
    promotion: z.number(),
    duration: z.string(),
    difficulty: z.string(),
    countries: z.array(z.string()),
    tour_types: z.array(z.string()),
    reviews: z.object({
        count: z.number(),
        rating: z.union([z.string(), z.null()])
    })
});

export type ToursType = z.infer<typeof TourSchema>;

export const fetchTours = (): AppThunk => async (dispatch, getState, { api }) => {
    const isIdle = selectToursIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchToursLoadingStatus());

    try {
        const res = await api.get('tour');
        const data = res.data;

        const result = TourSchema.array().safeParse(data);

        if (!result.success) {
            dispatch(fetchToursFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fetchToursSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fetchToursFailedStatus(errorMessage));
    }
}