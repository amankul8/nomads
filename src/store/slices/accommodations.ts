import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { type AppState } from "../type";
import { createAppSelector } from "../hooks";
import { AccommodationType } from "../models/accommodations/type";

interface AccommodationsState {
    entities: Record<number, AccommodationType>;
    ids: number[];
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

// Actions
export const fetchAccommodationsIdleStatus = createAction('accommodations/fetch/idle')
export const fetchAccommodationsLoadingStatus = createAction('accommodations/fetch/loading')
export const fetchAccommodationsSuccessedStatus = createAction<AccommodationType[]>('accommodations/fetch/successed')
export const fetchAccommodationsFailedStatus = createAction<string>('accommodations/fetch/failed')

// Начальное состояние
const initialState: AccommodationsState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Редюсер
export const accommodationsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchAccommodationsIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fetchAccommodationsLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAccommodationsSuccessedStatus, (state, action: PayloadAction<AccommodationType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, accommodation) => {
                acc[accommodation.id] = accommodation;
                return acc;
            }, {} as Record<number, AccommodationType>);

            state.ids = action.payload.map(accommodation => accommodation.id);
        })
        
        .addCase(fetchAccommodationsFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

export const selectAccommodationsEntities = (state: AppState) => state.accommodations.entities;

// Селекторы
export const selectAccommodations = createSelector(
  [selectAccommodationsEntities],
  (entities) => Object.values(entities)
);

export const selectAccommodationsByIds = (ids: number[]) => createSelector(
   [selectAccommodationsEntities],
  (entities) => ids.map(id => entities[id])
);

export const selectAccommodationById = (id: number) => (state: AppState) =>
  state.accommodations.entities[id];

export const selectAccommodationsIdleStatus = (state: AppState) => state.accommodations.status === 'idle';
export const selectAccommodationsLoadingStatus = (state: AppState) => state.accommodations.status === 'loading';
export const selectAccommodationsSuccessedStatus = (state: AppState) => state.accommodations.status === 'successed';
export const selectAccommodationsFailedStatus = (state: AppState) => state.accommodations.status === 'failed';
