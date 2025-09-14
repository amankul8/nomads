import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { type AppState } from "../type";
import { TourType } from "../models/tours/types";
import { TourFilterState } from "./tour_filter.slice";
import { createAppSelector } from "../hooks";

interface ToursStateType {
    entities: Record<number, TourType>;
    ids: number[];
    status: 'idle' | 'loading' | 'successed' | 'failed',
    error: string
}

// Actions
export const fetchToursIdleStatus = createAction('tours/fetch/idle')
export const fetchToursLoadingStatus = createAction('tours/fetch/loading')
export const fetchToursSuccessedStatus = createAction<TourType[]>('tours/fetch/successed')
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
        .addCase(fetchToursSuccessedStatus, (state, action: PayloadAction<TourType[]>) => {
            state.status = 'successed'

            state.entities = action.payload.reduce((acc, activity) => {
                acc[activity.id] = activity;
                return acc;
            }, {} as Record<number, TourType>);

            state.ids = action.payload.map(activity => activity.id);
        })

        .addCase(fetchToursFailedStatus, (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        })
});

export const selectToursEntities = (state: AppState) => state.tours.entities;

export const selectAllTours = createAppSelector(
    [selectToursEntities],
    (entities) => {
        return Object.values(entities)
    }
);

export const selectPopularTours = createAppSelector(
    [selectAllTours],
    (entities) => {
        const count = 6;
        if (count >= entities.length) return entities;
        else return entities.slice(0, count);
    }
);

export const selectTourById = (id: number) => createAppSelector(
    [selectToursEntities],
    (entities) => entities[id]
);

export const selectToursByDestinationId = (id: number) =>
    createAppSelector(
        [selectAllTours],
        (entities: TourType[]) => {
            if (!entities || !Array.isArray(entities)) {
                return [];
            }

            const filtered = entities.filter(tour => {
                if (!tour?.days || !Array.isArray(tour.days)) {
                    return false;
                }

                return tour.days.some(day => 
                    Array.isArray(day?.destinations) && day.destinations.includes(id)
                );
            });
            
            return filtered;
        }
    );

export const selectToursByActivityId = (id: number) =>
    createAppSelector(
        [selectAllTours],
        (entities: TourType[]) => {
            if (!entities || !Array.isArray(entities)) {
                return [];
            }

            const filtered = entities.filter(tour => {
                if (!tour?.days || !Array.isArray(tour.days)) {
                    return false;
                }

                return tour.days.some(day => 
                    Array.isArray(day?.entertainments) && day.entertainments.includes(id)
                );
            });

            return filtered;
        }
    );

export const selectFilteredTours = (filterData: TourFilterState) => createAppSelector(
    (state: AppState) => state.tours.entities,
    (entities) => {
        const filteredData = Object.values(entities).filter(item => {
            if ((filterData.duration_range[0] < parseInt(item.duration))
                && (parseInt(item.duration) < filterData.duration_range[1])
                && (filterData.price_range[0] < item.price)
                && (item.price < filterData.price_range[1])
                && (filterData.level_range[0] < item.difficulty)
                && (item.difficulty < filterData.level_range[1])
                // && (filterData.types.length == 0 || filterData.types.some(types => item.tour_types.includes(types)))
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