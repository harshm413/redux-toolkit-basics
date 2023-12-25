import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../features/rootReducer.js';

export const store = configureStore({
    reducer: {
        root: rootReducer,
    },
});
