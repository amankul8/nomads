import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { ActivityType } from "../models/activities";

interface ActivitiesState {
    entities: Record<number, ActivityType>;
    ids: number[];
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

// Actions
export const fatchActivitiesIdleStatus = createAction('activities/fetch/idle')
export const fatchActivitiesLoadingStatus = createAction('activities/fetch/loading')
export const fatchActivitiesSuccessedStatus = createAction<ActivityType[]>('activities/fetch/successed')
export const fatchActivitiesFailedStatus = createAction<string>('activities/fetch/failed')

// Начальное состояние
const initialState: ActivitiesState = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

// Редюсер
export const activitiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fatchActivitiesIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fatchActivitiesLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fatchActivitiesSuccessedStatus, (state, action: PayloadAction<ActivityType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, ActivityType>);

            state.ids = action.payload.map(activity => activity.id);
        })
        
        .addCase(fatchActivitiesFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

// Селекторы
export const selectActivities = createSelector(
    (state: AppState) => state.activities.entities,
    (activities) => Object.values(activities)
);
export const selectActivitiesIds = (state: AppState) => state.activities.ids;

export const selectActivitiesIdleStatus = (state: AppState) => state.activities.status === 'idle';
export const selectActivitiesLoadingStatus = (state: AppState) => state.activities.status === 'loading';
export const selectActivitiesSuccessedStatus = (state: AppState) => state.activities.status === 'successed';
export const selectActivitiesFailedStatus = (state: AppState) => state.activities.status === 'failed';
