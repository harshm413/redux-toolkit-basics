import { combineReducers } from '@reduxjs/toolkit';
import personalReducer from './personalSlice.js';
import contactReducer from './contactSlice.js';
import interestReducer from './interestSlice.js';

const rootReducer = combineReducers({
    personal: personalReducer,
    contact: contactReducer,
    interest: interestReducer,
});
export default rootReducer;
