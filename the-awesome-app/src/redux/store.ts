import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';

const reducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})


export const store = configureStore({reducer: reducer});

export type AppState = ReturnType<typeof store.getState>; // read from the store
export type AppDispatch = typeof store.dispatch; // dispatch an action to the store