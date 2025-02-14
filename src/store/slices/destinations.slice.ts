import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";

// Типы
interface Destination {
    id: string;
    name: string;
    location: {
        lon: string;
        lat: string;
    };
    images: string[];
    regionId: string;
}

interface DestinationsState {
    entities: Record<string, Destination | undefined>;
    ids: string[];
}

// Actions
export const storeDestinations = createAction<Destination[]>("destinations/store");
export const updateDestinations = createAction<Destination[]>("destinations/update");

// Начальное состояние
const initialState: DestinationsState = {
    entities: {},
    ids: [],
};

// Редюсер
export const destinationsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(storeDestinations, (state, action: PayloadAction<Destination[]>) => {
            state.entities = action.payload.reduce((acc, destination) => {
                acc[destination.id] = destination;
                return acc;
            }, {} as Record<string, Destination>);
            
            state.ids = action.payload.map(destination => destination.id);
        })
        .addCase(updateDestinations, (state, action: PayloadAction<Destination[]>) => {
            action.payload.forEach(destination => {
                state.entities[destination.id] = destination;
                
                if (!state.ids.includes(destination.id)) {
                    state.ids.push(destination.id);
                }
            });
        });
});

// Селекторы
export const selectDestinations = (state: AppState) => state.destinations.entities;
export const selectDestination = (state: AppState, destinationId: string) => state.destinations.entities[destinationId];
