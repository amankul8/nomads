import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

// Типы
interface Activity {
    id: number;
    name: string;
}

interface ActivitiesState {
    entities: Record<number, Activity | undefined>;
    ids: number[];
}

// Actions
export const storeActivities = createAction<Activity[]>("activities/store");
export const updateActivities = createAction<Activity[]>("activities/update");

// Начальное состояние
const initialState: ActivitiesState = {
    entities: {},
    ids: [],
};

// Редюсер
export const activitiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(storeActivities, (state, action: PayloadAction<Activity[]>) => {
            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, Activity>);

            state.ids = action.payload.map(activity => activity.id);
        })
        .addCase(updateActivities, (state, action: PayloadAction<Activity[]>) => {
            action.payload.forEach(activity => {
                state.entities[activity.id] = activity;
                
                if (!state.ids.includes(activity.id)) {
                    state.ids.push(activity.id);
                }
            });
        });
});

// Селекторы
export const selectActivities = (state: AppState) => state.activities.entities;
export const selectActivity = (state: AppState, activityId: number) => state.activities.entities[activityId];
