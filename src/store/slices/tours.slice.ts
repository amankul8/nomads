import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState, createAppSelector } from "../store";
import { ToursType } from "../models/tours.ts";
import { TourFilterState } from "./tour_filter.slice";

interface ToursStateType {
    entities: Record<number, ToursType>;
    ids: number[];
    status: 'idle'|'loading'|'successed'|'failed',
    error: string
}

// Actions
export const fetchToursIdleStatus = createAction('tours/fetch/idle')
export const fetchToursLoadingStatus = createAction('tours/fetch/loading')
export const fetchToursSuccessedStatus = createAction<ToursType[]>('tours/fetch/successed')
export const fetchToursFailedStatus = createAction<string>('tours/fetch/failed')

// Начальное состояние
const initialState: ToursStateType = {
    entities: {},
    ids: [],
    status: 'idle',
    error: ''
};

export const toursReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchToursIdleStatus, (state) => {
            state.status = 'idle';
            state.error = '';
        })
        .addCase(fetchToursLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchToursSuccessedStatus, (state, action: PayloadAction<ToursType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, ToursType>);

            state.ids = action.payload.map(activity => activity.id);
        })
        
        .addCase(fetchToursFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

export const selectTours = createSelector(
    (state: AppState) => state.tours.entities,
    (entities) => Object.values(entities)
);

export const selectPopularTours = createSelector(
    (state: AppState) => state.tours.entities,
    (entities) => {
        const count = 6;
        const tours = Object.values(entities)
        if(count >= tours.length) return tours;
        else return tours.slice(0, count);
    }
);

export const selectFilteredTours = (filterData: TourFilterState) => createSelector(
    (state: AppState) => state.tours.entities,
    (entities) => {
        const filteredData = Object.values(entities).filter(item => {
            if((filterData.duration_range[0] < parseInt(item.duration)) 
                && (parseInt(item.duration) < filterData.duration_range[1])
                && (filterData.price_range[0] < item.price) 
                && (item.price < filterData.price_range[1])
                && (filterData.level_range[0] < parseInt(item.difficulty)) 
                && (parseInt(item.difficulty) < filterData.level_range[1])
                && (filterData.types.length == 0 || filterData.types.some(types => item.tour_types.includes(types)))
            ) 
                return item;
        })
        return filteredData;
    }
);


export const selectToursIdleStatus = (state: AppState) => state.tours.status == 'idle';
export const selectToursLoadingStatus = (state: AppState) => state.tours.status == 'loading';
export const selectToursSuccessedStatus = (state: AppState) => state.tours.status == 'successed';
export const selectToursFailedStatus = (state: AppState) => state.tours.status == 'failed';