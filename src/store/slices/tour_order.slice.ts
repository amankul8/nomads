import { createAction, createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { Civility, Gender, Tiers, TourOrderType } from '../models/tour_order';
import { AppState } from '../store';

type InitialStateType = {
    status: 'idle' | 'loading' | 'successed' | 'failed',
    error: string,
    step: number,
    bookingData: TourOrderType
};

const initialState: InitialStateType = {
    status: 'idle',
    error: '',
    step: 1,
    bookingData: {
        tour_id: null,
        adultsCount: 0,
        childsCount: 0,
        singleRooms: 0,
        tiers: Tiers.basic,
        startDate: null,
        endDate: null,
        duration: null,
        bookingUser: {
            civility: Civility.Mr,
            firstName: '',
            lastName: '',
            gender: Gender.man,
            countryId: null,
            cityId: null,
            address: '',
            gmail: '',
            phone: ''
        },
        adults: [],
        childs: [],
        agreedToTravelConditions: false,
        hasAcceptedTravelRisks: false,
        hasReviewedForeignTravelAdvice: false,
        hasAgreedToResponsibleTourismPolicy: false,
        subscribedToNomadsNewsletter: false,
        subscribedToPartnerNewsletter: false
    }
};

type BookingAction<K extends keyof TourOrderType = keyof TourOrderType> = {
  field: K;
  value: TourOrderType[K];
};

// Actions
export const updateTourBookingData = createAction<BookingAction>('fetch/tour_booking/tour/id');
export const resetTourBookingData = createAction('fetch/tour_booking/data/reset');
export const updateTourBookingStep = createAction<number>('fetch/tour_booking/step');

// Reducer
export const tourOrderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTourBookingData, (state, action: PayloadAction<BookingAction>) => {
      const { field, value } = action.payload;
      (state.bookingData[field] as unknown) = value;
    })
    .addCase(updateTourBookingStep, (state, action) => {
        state.step = action.payload;
    })
    .addCase(resetTourBookingData, () => initialState)
});

// Selectors
export const selectTourBookingIdleStatus = (state: AppState) => state.tourBooking.status == 'idle';
export const selectTourBookingLoadingStatus = (state: AppState) => state.tourBooking.status == 'loading';
export const selectTourBookingSuccessedStatus = (state: AppState) => state.tourBooking.status == 'successed';
export const selectTourBookingFailedStatus = (state: AppState) => state.tourBooking.status == 'failed';

export const selectTourBookingStep = (state: AppState) => state.tourBooking.step;

export const selectTourBookingData = (state: AppState) => state.tourBooking.bookingData;

export const makeSelectTourBookingField = <K extends keyof TourOrderType>(key: K) =>
  createSelector([selectTourBookingData], (bookingData) => bookingData[key]);


