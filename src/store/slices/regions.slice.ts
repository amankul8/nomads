import { createAction, createReducer, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { RegionType } from "../models/regions";

interface RegionsState {
  entities: Record<number, RegionType | undefined>;
  ids: number[];
  status: 'idle' | 'loading' | 'successed' | 'failed';
  error: string;
}

// Начальное состояние
const initialState: RegionsState = {
  entities: {},
  ids: [],
  status: 'idle',
  error: ''
}

// Actions
export const fetchRegionsIdle = createAction('regions/fetch/idle');
export const fetchRegionsLoading = createAction('regions/fetch/loading');
export const fetchRegionsSuccessed = createAction<RegionType[]>('regions/fetch/successed');
export const fetchRegionsFailed = createAction<string>('regions/fetch/failed');


export const regionsReducer = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(fetchRegionsIdle, (state) => {
                state.status = 'idle';
                state.error = '';
            })
            .addCase(fetchRegionsLoading, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRegionsSuccessed, (state, action: PayloadAction<RegionType[]>) => {
                state.status = 'successed',

                state.entities = action.payload.reduce((acc, region) => {
                    acc[region.id] = region;
                    return acc;
                }, {} as Record<string, RegionType>);
                
                state.ids = action.payload.map(region => region.id);
            })
            .addCase(fetchRegionsFailed, (state, action: PayloadAction<string>) => {
                state.status = 'failed';
                state.error = action.payload   
            })
    }
)


// Селекторы
export const selectRegions = createSelector(
    (state: AppState) => state.regions.entities,
    (entities) => Object.values(entities)
)
export const selectRegionsIds = (state: AppState) => state.regions.ids;

export const selectRegionsIdleStatus = (state: AppState) => state.regions.status === 'idle';
export const selectRegionsLoadingStatus = (state: AppState) => state.regions.status === 'loading';
export const selectRegionsSuccessedStatus = (state: AppState) => state.regions.status === 'successed';
export const selectRegionsFailedStatus = (state: AppState) => state.regions.status === 'failed';
