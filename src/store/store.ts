import { configureStore, createSelector, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { destinationsReducer } from "./slices/destinations.slice";
import { activitiesReducer } from "./slices/activities.slice";
import { regionsReducer } from "./slices/regions.slice";
import { api } from "@/config/axiosInstance";
import { tourTypesReducer } from "./slices/tourTypes.slice";
import { staticDataReducer } from "./slices/static_data.slice";
import { toursReducer } from "./slices/tours.slice";
import { tourFilterReducer } from "./slices/tour_filter.slice";
import { countriesReducer } from "./slices/countries.slice";
import { createWrapper } from 'next-redux-wrapper';
import { tourOrderReducer } from "./slices/tour_order.slice";

export type ExtraArgument = {
  api: typeof api
}

const extraArgument = {
  api
}

export const store = () => configureStore({
  reducer: {
    tour_types: tourTypesReducer,
    activities: activitiesReducer,
    destinations: destinationsReducer,
    regions: regionsReducer,
    static_data: staticDataReducer,
    tours: toursReducer,
    tour_filter_data: tourFilterReducer,
    countries: countriesReducer,
    tourBooking: tourOrderReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: extraArgument
    }
  })
});

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<T = void> =  ThunkAction<
  T,
  AppState,
  typeof extraArgument,
  UnknownAction
>

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();
export const createAppSelector = createSelector.withTypes<AppState>();4

export const wrapper = createWrapper<AppStore>(store);