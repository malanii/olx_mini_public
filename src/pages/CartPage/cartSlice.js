import { createSlice } from '@reduxjs/toolkit';
import {
    addQuantityToItem,
    countTotalSum,
    filterItems,
    findItemInCart
} from '../../bus/helper/reducersHelpers';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalAmount: 0
    },
    reducers: {
        add: (state, action) => {
            const { id, price } = action.payload;
            findItemInCart(state.cartItems, id)
                ? (state.cartItems = addQuantityToItem(state.cartItems, id))
                : (state.cartItems = [...state.cartItems, action.payload]);
            state.totalAmount = state.totalAmount + price;
        },
        remove: (state, action) => {
            const { id } = action.payload;
            state.cartItems = filterItems(state.cartItems, id);
            state.totalAmount = countTotalSum(state.cartItems);
        },
        incrementQuantity: (state, action) => {
            const { id } = action.payload;
            state.cartItems = addQuantityToItem(state.cartItems, id);
            state.totalAmount = countTotalSum(state.cartItems);
        },
        decrementQuantity: (state, action) => {
            const { id } = action.payload;
            const existingCartItem = findItemInCart(state.cartItems, id);

            (existingCartItem.quantity === 1 || existingCartItem.quantity === 0) &&
                (state.cartItems = filterItems(state.cartItems, id));
            state.cartItems = state.cartItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : { ...item }
            );
            state.totalAmount = countTotalSum(state.cartItems);
        },
        setQuantity: (state, action) => {
            const [{ id }, newQuantity] = action.payload;
            state.cartItems = state.cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : { ...item }
            );
            state.totalAmount = countTotalSum(state.cartItems);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
        }
    }
});

export const {
    add,
    remove,
    incrementQuantity,
    decrementQuantity,
    setQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
