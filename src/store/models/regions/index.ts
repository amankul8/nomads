import { fetchRegionsFailed, fetchRegionsLoading, fetchRegionsSuccessed, selectRegionsIdleStatus } from "@/store/slices/regions.slice";
import { AppThunk } from "@/store/store";
import { z } from "zod";

export const RegionSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export type RegionType = z.infer<typeof RegionSchema>;

export const fetchRegions = (): AppThunk => async (dispatch, getState, { api }) => {
    
    const isIdle = selectRegionsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchRegionsLoading());

    try {
        const res = await api.get('region');
        const data = res.data;

        const result = RegionSchema.array().safeParse(data);

        if (!result.success) {
            dispatch(fetchRegionsFailed('Data validation error!'));
            return;
        }

        dispatch(fetchRegionsSuccessed(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fetchRegionsFailed(errorMessage));
    }
};
