import { fetchDestinationsFailed, fetchDestinationsLoading, fetchDestinationsSuccessed, selectDestinationsIdleStatus } from "@/store/slices/destinations.slice";
import { AppThunk } from "@/store/type";
import { z } from "zod";

const CoordinatesSchema = z.array( z.number());

const ImageSchema = z.object({
  alt: z.string(),
  url: z.string().url().or(z.string()),
});

const VideoSchema = z.object({
  url: z.string(),
  description: z.string(),
}).nullable();

export const DestinationSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
  type: z.string().optional(),
  region_id: z.number().int(),
  coordinates: CoordinatesSchema,
  images: z.array(ImageSchema),
  video: VideoSchema,
});

export type DestinationType = z.infer<typeof DestinationSchema>;

export const fetchDestinations = (): AppThunk => async (dispatch, getState, { apiClient }) => {
    
    const isIdle = selectDestinationsIdleStatus(getState());
    if (!isIdle) {
        return;
    }

    dispatch(fetchDestinationsLoading());

    try {
        // const res = await api.get('destinations');
        // const data = res.data;

        const res = await fetch('/data/locations/destinations.json');

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        const data = await res.json();

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
