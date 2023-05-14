import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICart} from '../types';

interface CartState {
    goods: ICart[];
}

const initialState: CartState = {
    goods: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createOrder(state, action: PayloadAction<ICart>){
            state.goods.push(action.payload);
        },
        incrementCount(state, action: PayloadAction<number>){
            const incrementCount = state.goods.find(good => good.id === action.payload);
            if (incrementCount){
                incrementCount.count = incrementCount.count + 1;
            }
        },
        decrementCount(state, action: PayloadAction<number>){
            const decrementedCount = state.goods.find(good => good.id === action.payload);
            if (decrementedCount){
                decrementedCount.count = decrementedCount.count - 1;
            }
        },
        deleteOrder(state, action: PayloadAction<number>){
            state.goods = state.goods.filter(good => good.id !== action.payload);
        }
    }
});

export const {actions: cartActions, reducer: cartReducer} = cartSlice;