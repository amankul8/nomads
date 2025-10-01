import { z } from 'zod';
import { ImageSchema } from '../tours/types';

const AccommodationDetailsSchema = z.object({
  shared_room: z.boolean().optional(),
  toilet: z.boolean().optional(),
  bath: z.boolean().optional(),
  wifi: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  laundry_ironing_services: z.boolean().optional()
});

const TierTypeSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

const HousingTypeSchema = z.union([
  z.literal(1), // hotel
  z.literal(2), // guest house
  z.literal(3), // yurt camp
  z.literal(4), // dormitory
  z.literal(5), // tent
  z.literal(6), // hostel
  z.literal(7), // glamping
  z.literal(8), // villa
]);

export const AccommodationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.array(ImageSchema),
  rating: z.number(),
  tier: TierTypeSchema,
  stars: z.number().min(0).max(5).optional(),
  type: HousingTypeSchema,
  stations: z.array(z.number()),
  details: AccommodationDetailsSchema,
});

export type AccommodationType = z.infer<typeof AccommodationSchema>;
export type HousingType = z.infer<typeof HousingTypeSchema>;
