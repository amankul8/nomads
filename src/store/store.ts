import { configureStore} from "@reduxjs/toolkit";
import { destinationsReducer } from "./slices/destinations.slice";
import { activitiesReducer } from "./slices/activities.slice";
import { regionsReducer } from "./slices/regions.slice";
import { tourTypesReducer } from "./slices/tourTypes.slice";
import { staticDataReducer } from "./slices/static_data.slice";
import { toursReducer } from "./slices/tours.slice";
import { tourFilterReducer } from "./slices/tour_filter.slice";
import { countriesReducer } from "./slices/countries.slice";
import { createWrapper } from 'next-redux-wrapper';
import { tourOrderReducer } from "./slices/tour_order.slice";
import { stationsReducer } from "./slices/stations.slice";
import { apiClient } from "@/api";
import { AppStore } from "./type";
import { accommodationsReducer } from "./slices/accommodations";

const extraArgument = {
  apiClient
}

export type ExtraArgument = {
  apiClient: typeof apiClient
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
    stations: stationsReducer,
    accommodations: accommodationsReducer 
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: extraArgument
    }
  })
});

export const wrapper = createWrapper<AppStore>(store);
