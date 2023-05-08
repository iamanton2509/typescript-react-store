import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../types';

const initialState: IUser = {
    email: null,
    token: null,
    id: null,
    firstname: null,
    lastname: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>){
            state.email = action.payload.email;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        removeUser(state){
            state.email = null;
            state.firstname = null;
            state.lastname = null;
            state.id = null;
            state.token = null;
            localStorage.removeItem('user');
        }
    }
});

export const {actions: userActions, reducer: userReducer} = userSlice;