import { ThunkAction } from "redux-thunk";
import { ExtraArgument, store } from "./store";
import { UnknownAction } from "@reduxjs/toolkit";

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<T = void> =  ThunkAction<
  T,
  AppState,
  ExtraArgument,
  UnknownAction
>