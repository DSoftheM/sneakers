import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./slices/CartSlice";

const store = configureStore({
    reducer: {
        cartReducer: addToCartSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


