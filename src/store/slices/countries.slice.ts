import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { CountryType, fetchCountries } from "../models/countries";
import { AppState } from "../store";

interface ICountriesState {
    ids: string[],
    entities: Record<string, CountryType>,
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

const initialState: ICountriesState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Actions
export const fetchCountriesIdleStatus = createAction('countries/fetch/idle')
export const fetchCountriesLoadingStatus = createAction('countries/fetch/loading')
export const fetchCountriesSuccessedStatus = createAction<CountryType[]>('countries/fetch/successed')
export const fetchCountriesFailedStatus = createAction<string>('countries/fetch/failed')

// Редюсер
export const countriesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCountriesIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fetchCountriesLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCountriesSuccessedStatus, (state, action: PayloadAction<CountryType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, country: CountryType) => {
                acc[country.cca3] = country;
                return acc;
            }, {} as Record<string, CountryType>);

            state.ids = action.payload.map(country => country.cca3);
        })
        
        .addCase(fetchCountriesFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

// Селекторы
export const selectCountries = createSelector(
    (state: AppState) => state.countries.entities,
    (countries) => Object.values(countries)
);
export const selectCountriesIds = (state: AppState) => state.countries.ids;

export const selectCountriesIdleStatus = (state: AppState) => state.countries.status === 'idle';
export const selectCountriesLoadingStatus = (state: AppState) => state.countries.status === 'loading';
export const selectCountriesSuccessedStatus = (state: AppState) => state.countries.status === 'successed';
export const selectCountriesFailedStatus = (state: AppState) => state.countries.status === 'failed';