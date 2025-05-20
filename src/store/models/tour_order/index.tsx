
export enum Tiers {
    basic = 'Basic',
    standart = 'Standart',
    premium = 'Premium'
}

export enum Gender {
    woman,
    man
}

export enum MultiRisk {
    'multi-risk',
    'premium-multi-risk',
    'insured'
}

export enum Civility {
    Mr,
    Mrs,
    Miss
}

export interface BookingUser {
    civility: Civility;
    firstName: string;
    lastName: string;
    gender: Gender;
    countryId: string | null;
    cityId: string | null;
    address: string;
    gmail: string;
    phone: string;
}

export interface Adult {
    civility: Civility;
    name: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    birthday: Date;
    countryId: number;
    multiRisk: MultiRisk;
}

export interface Child {
    name: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    birthday: Date;
    countryId: number;
}

export interface TourOrderType {
    tour_id: number | null;
    adultsCount: number;
    childsCount: number;
    singleRooms: number;
    tiers: Tiers;
    startDate: Date | null;
    endDate: Date | null;
    duration: number | null;
    bookingUser: BookingUser;
    adults: Adult[];
    childs: Child[];
    agreedToTravelConditions: boolean;
    hasAcceptedTravelRisks: boolean;
    hasReviewedForeignTravelAdvice: boolean;
    hasAgreedToResponsibleTourismPolicy: boolean;
    subscribedToNomadsNewsletter: boolean;
    subscribedToPartnerNewsletter: boolean;
}