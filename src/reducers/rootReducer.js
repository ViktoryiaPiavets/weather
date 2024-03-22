import { combineReducers } from '@reduxjs/toolkit';
import { cityReducer } from './cityReducer';
import { locationReducer } from './locationReducer';

export const rootReducer = combineReducers({
    city: cityReducer,
    coords: locationReducer
})

