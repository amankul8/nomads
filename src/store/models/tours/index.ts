import { AppThunk } from '@/store/type';
import { fetchToursFailedStatus, fetchToursLoadingStatus, fetchToursSuccessedStatus, selectToursIdleStatus } from '@/store/slices/tours.slice';
import {TourSchema} from './types';

export const fetchTours = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    const isIdle = selectToursIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchToursLoadingStatus());

    try {
        const res = await apiClient.getClient().get('data/tours/tours.json');
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