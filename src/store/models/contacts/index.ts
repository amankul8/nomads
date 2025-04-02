import {
    selectStaticDataIdleStatus,
    fatchStaticDataLoadingStatus,
    fatchStaticDataSuccessedStatus,
    fatchStaticDataFailedStatus
} from "@/store/slices/static_data.slice";
import { AppThunk } from "@/store/store";

export const fetchContacts = (): AppThunk => async (dispatch, getState) => {
    
    const isIdle = selectStaticDataIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fatchStaticDataLoadingStatus());

    try {
        const res = await await fetch('http://localhost:3000/data/static_data.json');
        const data = await res.json();
    
        dispatch(fatchStaticDataSuccessedStatus(data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fatchStaticDataFailedStatus());
    }
};
