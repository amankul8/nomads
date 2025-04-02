import {PayloadAction, createReducer, createAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

type StaticDataStateType = {
    status: 'idle' | 'loading' | 'successed' | 'failed';
    data: Record<string, string>;
}

const initialState: StaticDataStateType = {
    status: 'idle',
    data: {}
};

export const fatchStaticDataIdleStatus = createAction('static_data/fetch/idle')
export const fatchStaticDataLoadingStatus = createAction('static_data/fetch/loading')
export const fatchStaticDataSuccessedStatus = createAction<Record<string, string>>('static_data/fetch/successed')
export const fatchStaticDataFailedStatus = createAction('static_data/fetch/failed')


export const staticDataReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fatchStaticDataIdleStatus, (state) => {
            state.status = 'idle';
        })
        .addCase(fatchStaticDataLoadingStatus, (state) => {
            state.status = 'loading';
        })
        .addCase(fatchStaticDataSuccessedStatus, (state, action: PayloadAction<Record<string, string>>) => {
            state.status = 'successed'
            state.data = {...action.payload}
        })
        
        .addCase(fatchStaticDataFailedStatus, (state) => {
            state.status = 'failed';
        })
});

// Селекторы
export const selectStaticData = (state: AppState) => state.static_data.data;

export const selectStaticDataIdleStatus = (state: AppState) => state.static_data.status === 'idle';
export const selectStaticDataLoadingStatus = (state: AppState) => state.static_data.status === 'loading';
export const selectStaticDataSuccessedStatus = (state: AppState) => state.static_data.status === 'successed';
export const selectStaticDataFailedStatus = (state: AppState) => state.static_data.status === 'failed';