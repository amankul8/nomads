import { configureStore, createSelector, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import { destinationsReducer } from "./slices/destinations.slice";
import { activitiesReducer } from "./slices/activities.slice";
import { regionsReducer } from "./slices/regions.slice";
import { api } from "@/config/axiosInstance";

export type ExtraArgument = {
  api: typeof api
}

const extraArgument = {
  api
}

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    destinations: destinationsReducer,
    regions: regionsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: extraArgument
    }
  })
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<T = void> =  ThunkAction<
  T,
  AppState,
  typeof extraArgument,
  UnknownAction
>

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();