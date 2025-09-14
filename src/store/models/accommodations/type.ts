import z from 'zod';
import { ImageSchema } from '../tours/types';

const AccommodationDetailsSchema = z.object({
  shared_room: z.boolean(),
  toilet: z.boolean(),
  bath: z.boolean(),
  wifi: z.boolean(),
  restaurant: z.boolean(),
  laundry_ironing_services: z.boolean()
})


export const AccommodationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.array(ImageSchema),
  rating: z.number(),
  tier: z.string(),
  type: z.string(),
  stars: z.number().nullable(),
  stations: z.array(z.number()),
  details: AccommodationDetailsSchema
})

export type AccommodationType = z.infer<typeof AccommodationSchema>;