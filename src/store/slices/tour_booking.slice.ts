import { createAction, createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { BookingUser, Civility, Gender, Tiers, TourBookingType } from '../models/tour_order';
import { AppState } from '../type';
import { format, addWeeks} from "date-fns";
import { MUI_DATE_FORMAT } from '@/config';

const today = new Date();
const nextWeek = addWeeks(today, 1);

type InitialStateType = {
  status: 'idle' | 'loading' | 'successed' | 'failed',
  error: string,
  step: number,
  bookingData: TourBookingType,
  userData: BookingUser;
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
    startDate: format(today, MUI_DATE_FORMAT),
    endDate: format(nextWeek, MUI_DATE_FORMAT),
    duration: 7,
    adults: [],
    childs: [],
    agreedToTravelConditions: false,
    hasAcceptedTravelRisks: false,
    hasReviewedForeignTravelAdvice: false,
    hasAgreedToResponsibleTourismPolicy: false,
    subscribedToNomadsNewsletter: false,
    subscribedToPartnerNewsletter: false
  },
  userData: {
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
};

type BookingDataAction<K extends keyof TourBookingType = keyof TourBookingType> = {
  field: K;
  value: TourBookingType[K];
};

type BookingUserAction<K extends keyof BookingUser = keyof BookingUser> = {
  field: K;
  value: BookingUser[K];
};

// Actions
export const updateTourBookingData = createAction<BookingDataAction>('fetch/tour_booking/tour/data');
export const updateTourBookingUserData = createAction<BookingUserAction>('fetch/tour_booking/tour/user/data');
export const resetTourBookingData = createAction('fetch/tour_booking/data/reset');
export const updateTourBookingStep = createAction<number>('fetch/tour_booking/step');

// Reducer
export const tourOrderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTourBookingData, (state, action: PayloadAction<BookingDataAction>) => {
      const { field, value } = action.payload;
      (state.bookingData[field] as unknown) = value;
    })
    .addCase(updateTourBookingUserData, (state, action: PayloadAction<BookingUserAction>) => {
      const { field, value } = action.payload;
      (state.userData[field] as unknown) = value;
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
export const selectTourBookingUserData = (state: AppState) => state.tourBooking.userData;

export const makeSelectTourBookingField = <K extends keyof TourBookingType>(key: K) =>
  createSelector([selectTourBookingData], (bookingData) => bookingData[key]);


