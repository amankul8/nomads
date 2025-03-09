import { fetchDestinationsFailed, fetchDestinationsLoading, fetchDestinationsSuccessed, selectDestinationsIdleStatus } from "@/store/slices/destinations.slice";
import { AppThunk } from "@/store/store";
import { z } from "zod";

export const DestinationDetailSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(), 
    coordinates: z.array(z.number()),  
    images: z.array(z.object({
        alt: z.string(),
        url: z.string()
    })) 
    // active: z.boolean(),
    // main_image: z.string(),
    // ratings: z.string(),
    // region: z.string(),
});

export type DestinationDetailType = z.infer<typeof DestinationDetailSchema>;

export const DestinationSchema = z.object({
    id: z.number(),
    active: z.boolean(),
    main_image: z.string(),
    coordinates: z.array(z.number()),
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
