import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sneaker } from "../../Interfaces/Interfaces";

interface CartState {
    cart: Sneaker[]
}

const initialState: CartState = { cart: [] };

const slice = createSlice({
    name: 'addToCart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Sneaker>) {
            state.cart.push(action.payload);
        },
        deleteFromCart(state, action: PayloadAction<{ id: number }>) {
            const elementToDelete: Sneaker | undefined = state.cart.find(item => item.id === action.payload.id);
            if (elementToDelete) {
                const index: number = state.cart.indexOf(elementToDelete);
                state.cart.splice(index, 1);
            } else { throw new Error('elementToDelete is undefined.') }
        }
    }
});

export default slice.reducer;
export const { addToCart, deleteFromCart } = slice.actions;