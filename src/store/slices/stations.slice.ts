import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../type";
import { StationType } from "../models/stations";

interface StationsState {
    entities: Record<number, StationType>;
    ids: number[];
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

// Actions
export const fatchStationsIdleStatus = createAction('stations/fetch/idle')
export const fatchStationsLoadingStatus = createAction('stations/fetch/loading')
export const fatchStationsSuccessedStatus = createAction<StationType[]>('stations/fetch/successed')
export const fatchStationsFailedStatus = createAction<string>('stations/fetch/failed')

// Начальное состояние
const initialState: StationsState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Редюсер
export const stationsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fatchStationsIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fatchStationsLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fatchStationsSuccessedStatus, (state, action: PayloadAction<StationType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, StationType>);

            state.ids = action.payload.map(activity => activity.id);
        })
        
        .addCase(fatchStationsFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

// Селекторы
export const selectstations = createSelector(
    (state: AppState) => state.stations.entities,
    (stations) => Object.values(stations)
);
export const selectstationsIds = (state: AppState) => state.stations.ids;

export const selectStationsIdleStatus = (state: AppState) => state.stations.status === 'idle';
export const selectStationsLoadingStatus = (state: AppState) => state.stations.status === 'loading';
export const selectStationsFailedStatus = (state: AppState) => state.stations.status === 'failed';