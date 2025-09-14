import { z } from 'zod'

// ─── Subschemas ───────────────────────────────────────────────────────────────

export const ImageSchema = z.object({
  url: z.string(),
  alt: z.string()
})

const CoordinatesSchema = z.object({
  car_range: z.number().nullable(),
  foot_range: z.number().nullable(),
  horse_time: z.number().nullable(),
  ski_range: z.number().nullable(),
  cycle_range: z.number().nullable(),
  boat_range: z.number().nullable()
})

const DaySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  meals: z.array(z.number()),
  accommodations: z.array(z.number()),
  details: CoordinatesSchema,
  destinations: z.array(z.number()),
  entertainments: z.array(z.number())
})

const TourPriceSchema = z.object({
  id: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  tier: z.string(),
  price: z.number(),
  registered: z.string()
})

const CoverageSchema = z.object({
  included: z.array(z.string()),
  excluded: z.array(z.string())
})

const UserSchema = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  country: z.string(),
  city: z.string()
})

const ReviewDetailsSchema = z.object({
  accommodation: z.string(),
  entertainment: z.string(),
  food: z.string(),
  guide: z.string(),
  vehicle: z.string()
})

const TourReviewSchema = z.object({
  user: UserSchema,
  tour_date: z.string(),
  description: z.string(),
  images: z.array(ImageSchema),
  details: ReviewDetailsSchema
})

const AvgReviewsSchema = z.object({
  excellent: z.number(),
  good: z.number(),
  avg: z.number(),
  poor: z.number(),
  terrible: z.number()
})

const PersonalGearSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image: z.string()
})

// ─── Main Tour Schema ─────────────────────────────────────────────────────────

export const TourSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  video: z.string().url(),
  price: z.number(),
  promotion: z.number(),
  duration: z.number(),
  difficulty: z.number(),
  countries: z.array(z.number()),
  tour_types: z.array(z.number()),
  next_departure: z.string(),
  total_details: CoordinatesSchema,
  map: z.string().url(),
  images: z.array(ImageSchema),
  tour_price: z.array(TourPriceSchema),
  coverage: CoverageSchema,
  days: z.array(DaySchema),
  avg_reviews: AvgReviewsSchema,
  tour_reviews: z.array(TourReviewSchema),
  personal_gears: z.array(PersonalGearSchema)
})

export type TourType = z.infer<typeof TourSchema>;

export type TourDayType = z.infer<typeof DaySchema>;
