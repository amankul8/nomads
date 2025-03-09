import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { TourTypeType } from "../models/tour_types";

interface TourTypesState {
    entities: Record<number, TourTypeType | undefined>;
    ids: number[];
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

// Actions
export const fatchTourTypesIdleStatus = createAction('tourTypes/fetch/idle')
export const fatchTourTypesLoadingStatus = createAction('tourTypes/fetch/loading')
export const fatchTourTypesSuccessedStatus = createAction<TourTypeType[]>('tourTypes/fetch/successed')
export const fatchTourTypesFailedStatus = createAction<string>('tourTypes/fetch/failed')

// Начальное состояние
const initialState: TourTypesState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Редюсер
export const tourTypesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fatchTourTypesIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fatchTourTypesLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fatchTourTypesSuccessedStatus, (state, action: PayloadAction<TourTypeType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, TourTypeType>);

            state.ids = action.payload.map(activity => activity.id);
        })
        
        .addCase(fatchTourTypesFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

// Селекторы
export const selectTourTypes = createSelector(
    (state: AppState) => state.tour_types.entities,
    (tour_types) => Object.values(tour_types)
);

export const selectTourTypesIdleStatus = (state: AppState) => state.tour_types.status === 'idle';
export const selectTourTypesLoadingStatus = (state: AppState) => state.tour_types.status === 'loading';
export const selectTourTypesSuccessedStatus = (state: AppState) => state.tour_types.status === 'successed';
export const selectTourTypesFailedStatus = (state: AppState) => state.tour_types.status === 'failed';
