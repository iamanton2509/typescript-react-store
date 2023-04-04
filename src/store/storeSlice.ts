import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import products from './../helpers/allProducts';
import {IProduct} from './../types';

type ProductState = {
    products: IProduct[]
}

const initialStateProducts:ProductState = {
    products: products
}

const storeSlice = createSlice({
    name: 'products',
    initialState: initialStateProducts,
    reducers: {
        sortProducts (state, action: PayloadAction<string>) {
            if (action.payload === 'price-ascending') {
                state.products.sort((a, b) => a['price'] - b['price']);
            } else if (action.payload === 'price-descending') {
                state.products.sort((a, b) => b['price'] - a['price']);
            } else if (action.payload === 'title') {
                state.products.sort((a, b) => a['title'].localeCompare(b['title']));
            } else if (action.payload === 'id') {
                state.products.sort((a, b) => a['id'] - b['id']);
            }
        },
        addProductToCart (state, action: PayloadAction<number>) {
            const toggledProduct = state.products.find(product => product.id === Number(action.payload));
            if (toggledProduct) {
                toggledProduct.cart = !toggledProduct.cart;
            }
        },
        deleteProduct (state, action: PayloadAction<number>) {
            const removedProduct = state.products.find(product => product.id === action.payload);
            if (removedProduct) {
                removedProduct.cart = false;
            }
        },
        increaseCount (state, action: PayloadAction<number>) {
            const increasedValue = state.products.find(product => product.id === action.payload);
            if (increasedValue) {
                increasedValue.count = increasedValue.count + 1;
                increasedValue.totalPrice = increasedValue.count * increasedValue.price;
            }
        },
        decreaseCount (state, action: PayloadAction<number>) {
            const decreasedValue = state.products.find(product => product.id === action.payload);
            if (decreasedValue) {
                if (decreasedValue.count > 1) {
                    decreasedValue.count = decreasedValue.count - 1;
                    decreasedValue.totalPrice = decreasedValue.count * decreasedValue.price;
                } else {
                    decreasedValue.cart = false;
                }
            }
        },
        addToWishlist (state, action: PayloadAction<number>) {
            console.log(action.payload);
            const wishedProduct = state.products.find(product => product.id === action.payload);
            if (wishedProduct) {
                wishedProduct.wishlist = !wishedProduct.wishlist;
            }
        },
    }
});

export const {sortProducts, addProductToCart, deleteProduct, increaseCount, decreaseCount, addToWishlist} = storeSlice.actions;
export default storeSlice.reducer;