import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

const reducer = combineReducers({
    auth: authReducer
})


export const store = configureStore({reducer: reducer});

export type AppState = ReturnType<typeof store.getState>; // read from the store
export type AppDispatch = typeof store.dispatch; // dispatch an action to the store