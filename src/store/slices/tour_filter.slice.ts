import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { RegionType } from "../models/regions";

export interface TourFilterState {
    duration_range: Array<number>,
    price_range: Array<number>,
    countries: Array<number>,
    types: Array<string>,
    destinations: Array<string>,
    activities: Array<string>,
    level_range: Array<number>,
}

const initialState: TourFilterState = {
    duration_range: [0, 180],
    price_range: [0, 10000],
    countries: [],
    types: [],
    destinations: [],
    activities: [],
    level_range: [0, 10],
}

export const fetchTourFilterDuration = createAction<number[]>('tour/filter/fetch/duration');

export const fetchTourFilterPrice = createAction<number[]>('tour/filter/fetch/price');

export const fetchTourFilterCountriesAdd = createAction<number>('tour/filter/fetch/countries/add');
export const fetchTourFilterCountriesRemove = createAction<number>('tour/filter/fetch/countries/remove');

export const fetchTourFilterTypesAdd = createAction<string>('tour/filter/fetch/types/add');
export const fetchTourFilterTypesRemove = createAction<string>('tour/filter/fetch/types/remove');

export const fetchTourFilterDestinations = createAction<string[]>('tour/filter/fetch/destinations');

export const fetchTourFilterActivitiesAdd = createAction<string>('tour/filter/fetch/activities/add');
export const fetchTourFilterActivitiesRemove = createAction<string>('tour/filter/fetch/activities/remove');

export const fetchTourFilterLevels = createAction<number[]>('tour/filter/fetch/levels');


export const tourFilterReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(fetchTourFilterDuration, (state, action: PayloadAction<number[]>) => {
                state.duration_range = [...action.payload];
            })
            .addCase(fetchTourFilterPrice, (state, action: PayloadAction<number[]>) => {
                state.price_range = [...action.payload];
            })
            .addCase(fetchTourFilterCountriesAdd, (state, action: PayloadAction<number>) => {
                state.countries = [... state.countries, action.payload];
            })
            .addCase(fetchTourFilterCountriesRemove, (state, action: PayloadAction<number>) => {
                const newCountries = state.countries.filter(item => item !== action.payload);
                state.countries = newCountries;
            })
            .addCase(fetchTourFilterTypesAdd, (state, action: PayloadAction<string>) => {
                state.types = [... state.types, action.payload];
            })
            .addCase(fetchTourFilterTypesRemove, (state, action: PayloadAction<string>) => {
                const newTypes = state.types.filter(item => item !== action.payload);
                state.types = newTypes;
            })
            .addCase(fetchTourFilterDestinations, (state, action: PayloadAction<string[]>) => {
                state.destinations = [...action.payload];
            })
            .addCase(fetchTourFilterActivitiesAdd, (state, action: PayloadAction<string>) => {
                state.activities = [... state.activities, action.payload];
            })
            .addCase(fetchTourFilterActivitiesRemove, (state, action: PayloadAction<string>) => {
                const newActivities = state.activities.filter(item => item !== action.payload);
                state.activities = newActivities;
            })
            .addCase(fetchTourFilterLevels, (state, action: PayloadAction<number[]>) => {
                state.level_range = [...action.payload];
            })
    }
)

export const selectTourFilterData = (state: AppState) => state.tour_filter_data;

export const selectTourFilterDurations = (state: AppState) => state.tour_filter_data.duration_range;
export const selectTourFilterPrices = (state: AppState) => state.tour_filter_data.price_range;
export const selectTourFilterCountries = (state: AppState) => state.tour_filter_data.countries;
export const selectTourFilterTypes = (state: AppState) => state.tour_filter_data.types;
export const selectTourFilterDestinations = (state: AppState) => state.tour_filter_data.destinations;
export const selectTourFilterActivities = (state: AppState) => state.tour_filter_data.activities;
export const selectTourFilterLevels = (state: AppState) => state.tour_filter_data.level_range;