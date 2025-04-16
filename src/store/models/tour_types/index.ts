import { fatchTourTypesFailedStatus, fatchTourTypesLoadingStatus, fatchTourTypesSuccessedStatus, selectTourTypesIdleStatus } from "@/store/slices/tourTypes.slice";
import { AppThunk } from "@/store/store";
import axios from "axios";
import {z} from 'zod';

export const TourTypeScema = z.object({
    id: z.number(),
    type: z.string(),
    icon: z.union([z.string(), z.null()]),
})

export type TourTypeType = z.infer<typeof TourTypeScema>;

export const fetchTourTypes = (): AppThunk => async (dispatch, getState, { api }) => {
    
    const isIdle = selectTourTypesIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fatchTourTypesLoadingStatus());

    try {
        // const res = await api.get('type-of-tour');
        const res = await axios.get('http://localhost:3000/data/types.json');
        const data = res.data;

        const result = TourTypeScema.array().safeParse(data);

        if (!result.success) {
            dispatch(fatchTourTypesFailedStatus('Data validation error!'));
            return;
        }

        dispatch(fatchTourTypesSuccessedStatus(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fatchTourTypesFailedStatus(errorMessage));
    }
};


