import { fetchDestinationsFailed, fetchDestinationsLoading, fetchDestinationsSuccessed, selectDestinationsIdleStatus } from "@/store/slices/destinations.slice";
import { AppThunk } from "@/store/store";
import { z } from "zod";

const DestinationSchema = z.object({
    active: z.boolean(),
    main_image: z.string(),
    map_coordinate: z.array(z.number()),
    ratings: z.string(),
    region: z.string(),
    title: z.string()
});

export type DestinationType = z.infer<typeof DestinationSchema>;

export const fetchDestinations = (): AppThunk => async (dispatch, getState, { api }) => {
    
    const isIdle = selectDestinationsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchDestinationsLoading());

    try {
        const res = await api.get('destinations');
        const data = res.data;

        const result = DestinationSchema.array().safeParse(data);

        if (!result.success) {
            dispatch(fetchDestinationsFailed('Data validation error!'));
            return;
        }

        dispatch(fetchDestinationsSuccessed(result.data));

    } catch (error: any) {
        const errorMessage = error?.message || 'Failed to fetch destinations';
        dispatch(fetchDestinationsFailed(errorMessage));
    }
};
