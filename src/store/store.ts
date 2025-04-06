import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import searchReducer from './searchSlice';
import cartReducer from './cartSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        search: searchReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
