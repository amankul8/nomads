import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { DestinationType } from "../models/destinations";

type StatusType = 'idle' | 'loading' | 'successed' | 'failed';

interface DestinationsState {
    entities: Record<number, DestinationType | undefined>;
    ids: number[];
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
                acc[destination.id] = destination;
                return acc;
            }, {} as Record<number, DestinationType>);
            
            state.ids = action.payload.map(destination => destination.id);
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
export const selectDestinations = createSelector(
    (state: AppState) => state.destinations.entities,
    (entities) => Object.values(entities)
);
export const selectDestinationsByRegion = createSelector(
    (state: AppState, region: string) => selectDestinations(state),
    (state: AppState, region: string) => region,
    (entities, region) => {
        if(region === '') return entities;
        return entities.filter(destination => destination!.region === region);
    }
)
export const selectDestinationsIds = (state: AppState) => state.destinations.ids;
export const selectDestination = (state: AppState, destinationId: number) => state.destinations.entities[destinationId];

export const selectDestinationsIdleStatus = (state: AppState) => state.destinations.status === 'idle';
export const selectDestinationsLoadingStatus = (state: AppState) => state.destinations.status === 'loading';
export const selectDestinationsSuccessedStatus = (state: AppState) => state.destinations.status === 'successed'; 
export const selectDestinationsFailedStatus = (state: AppState) => state.destinations.status === 'failed';