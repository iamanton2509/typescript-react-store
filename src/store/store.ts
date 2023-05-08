import {configureStore} from '@reduxjs/toolkit';
import storeReducer from './storeSlice';
import serviceSlice from './serviceSlice';
import {userReducer} from './userSlice';

const store = configureStore({
    reducer: {
        products: storeReducer,
        services: serviceSlice,
        user: userReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;