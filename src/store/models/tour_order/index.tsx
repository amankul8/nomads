import z from 'zod';

export enum Tiers {
    'basic',
    'standart',
    'premium'
}

export enum Gender {
    'woman',
    'man'
}

export enum MultiRisk {
    'multi-risk',
    'premium-multi-risk',
    'insured'
}

export const TourOrderSchema = z.object({
    id: z.number(),
    name: z.string(),
    adults: z.number(),
    childs: z.number(),
    rooms: z.number(),
    tiers: z.nativeEnum(Tiers),
    startDate: z.date(),
    endDate: z.date(),
    duration: z.number(),
    singleRooms: z.number(), 
    multiRiskInsurance: z.number(),
    premiumMultiRiskInsurance: z.number(),
    taxesAndFees: z.number(),
    details: z.object({
        firstName: z.string(),
        lastName: z.string(),
        gender: z.nativeEnum(Gender),
        countryId: z.number(),
        cityId: z.number(),
        adress: z.string(),
        gmail: z.string(),
        phone: z.string(),
    }),
    adultsDetails: z.array(
        z.object({
            name: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            gender: z.nativeEnum(Gender),
            birthday: z.date(),
            coutryId: z.number(),
            multiRisk: z.nativeEnum(MultiRisk)

        })
    ),
    childsDetails: z.array(
        z.object({
            name: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            gender: z.nativeEnum(Gender),
            birthday: z.date(),
            coutryId: z.number(),
        })
    )
});