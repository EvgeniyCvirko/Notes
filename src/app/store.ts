import {combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
// @ts-ignore
window.store = store