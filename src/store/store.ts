import {configureStore} from '@reduxjs/toolkit';
import storeReducer from './storeSlice';

const store = configureStore({
    reducer: {
        products: storeReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;