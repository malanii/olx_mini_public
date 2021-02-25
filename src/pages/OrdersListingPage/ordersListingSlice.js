import { createSlice } from '@reduxjs/toolkit';

export const ordersListingSlice = createSlice({
    name: 'ordersListing',
    initialState: {
        orders: [],
        loading: false,
        error: null
    },
    reducers: {
        start: (state) => {
            state.loading = true;
        },
        success: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const { start, success, error } = ordersListingSlice.actions;
export default ordersListingSlice.reducer;
