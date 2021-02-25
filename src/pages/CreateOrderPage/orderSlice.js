import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderedItems: [],
        total: null,
        loading: false,
        succeed: false,
        error: null
    },
    reducers: {
        addItemsToOrder: (state, action) => {
            const { items, totalPrice } = action.payload;
            state.orderedItems = items;
            state.total = totalPrice;
        },
        start: (state) => {
            state.loading = true;
        },
        success: (state) => {
            state.loading = false;
            state.succeed = true;
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const { addItemsToOrder, start, success, error } = orderSlice.actions;
export default orderSlice.reducer;
