import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppState, AppStore } from "./type";
import { createSelector } from "@reduxjs/toolkit";

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<AppStore>();
export const createAppSelector = createSelector.withTypes<AppState>();