import { fetchRegionsFailed, fetchRegionsLoading, fetchRegionsSuccessed, selectRegionsIdleStatus } from "@/store/slices/regions.slice";
import { type AppThunk } from "@/store/type";
import { z } from "zod";

export const RegionSchema = z.object({
  id: z.number(),
  name: z.string(),
  country_id: z.number(),
  coordinates: z.tuple([z.number(), z.number()]),
});

export type RegionType = z.infer<typeof RegionSchema>;

export const fetchRegions = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    
    const isIdle = selectRegionsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchRegionsLoading());

    try {
        // const res = await api.get('region');
        // const data = res.data;

        const res = await fetch('/data/locations/regions.json');

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        let data = await res.json();

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
