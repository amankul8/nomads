import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

// Типы
interface Region {
    id: string;
    name: string;
    countryId: string;
}

interface RegionsState {
    entities: Record<string, Region | undefined>;
    ids: string[];
}

// Actions
export const storeRegions = createAction<Region[]>("regions/store");
export const updateRegions = createAction<Region[]>("regions/update");

// Начальное состояние
const initialState: RegionsState = {
    entities: {},
    ids: []
};

// Редюсер
export const regionsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(storeRegions, (state, action: PayloadAction<Region[]>) => {
            state.entities = action.payload.reduce((acc, region) => {
                acc[region.id] = region;
                return acc;
            }, {} as Record<string, Region>);

            state.ids = action.payload.map(region => region.id);
        })
        .addCase(updateRegions, (state, action: PayloadAction<Region[]>) => {
            action.payload.forEach(region => {
                state.entities[region.id] = region;
                if (!state.ids.includes(region.id)) {
                    state.ids.push(region.id);
                }
            });
        });
});

// Селекторы
export const selectRegions = (state: AppState) => state.regions.entities;
export const selectRegion = (state: AppState, regionId: string) => state.regions.entities[regionId];
