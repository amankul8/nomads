import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { DestinationType } from "../models/destinations";

type StatusType = 'idle' | 'loading' | 'successed' | 'failed';

interface DestinationsState {
    entities: Record<string, DestinationType | undefined>;
    ids: string[];
    status: StatusType,
    error: string
}

// Actions

export const fetchDestinationsSuccessed = createAction<DestinationType[]>('destinations/fetch/successed');
export const fetchDestinationsLoading = createAction('destinations/fetch/loading');
export const fetchDestinationsIdle = createAction('destinations/fetch/idle');
export const fetchDestinationsFailed = createAction<string>('destinations/fetch/failed');

// Начальное состояние
const initialState: DestinationsState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Редюсер
export const destinationsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchDestinationsIdle, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fetchDestinationsSuccessed, (state, action: PayloadAction<DestinationType[]>) => {
            state.status = 'successed';
            state.error = '';

            state.entities = action.payload.reduce((acc, destination) => {
                acc[destination.title] = destination;
                return acc;
            }, {} as Record<string, DestinationType>);
            
            state.ids = action.payload.map(destination => destination.title);
        })
        .addCase(fetchDestinationsLoading, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchDestinationsFailed, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

// Селекторы
export const selectDestinations = (state: AppState) => state.destinations.entities;
export const selectDestination = (state: AppState, destinationId: string) => state.destinations.entities[destinationId];
export const selectDestinationsIdleStatus = (state: AppState) => state.destinations.status === 'idle';
export const selectDestinationsLoadingStatus = (state: AppState) => state.destinations.status === 'loading';
export const selectDestinationsSuccessedStatus = (state: AppState) => state.destinations.status === 'loading'; 
export const selectDestinationsFailedStatus = (state: AppState) => state.destinations.status === 'failed';