import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {IService} from './../types';

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:3001/services');
            if (!response.ok){
                throw new Error('Server/Network error');
            }
            const data = await response.json();
            return data;
        } catch (error: any){
            return rejectWithValue(error.message);
        }
    }
)

interface ServicesState {
    services: IService[];
    status: 'loading' | 'successful' | 'failed';
    error: string | null;
}

const initialState:ServicesState = {
    services: [],
    status: 'loading',
    error: null
}

const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchServices.pending, state => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchServices.fulfilled, (state, action: PayloadAction<IService[]>) => {
            state.services = action.payload;
            state.status = 'successful';
            state.error = null;
        })
        .addCase(fetchServices.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.status = 'failed';
        })
    }
});

const {} = serviceSlice.actions;
export default serviceSlice.reducer;