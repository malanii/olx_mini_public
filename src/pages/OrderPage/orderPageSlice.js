import { createSlice } from '@reduxjs/toolkit';

export const orderPageSlice = createSlice({
    name: 'orderPage',
    initialState: {
        id: null,
        order: {},
        loading: true,
        error: null
    },
    reducers: {
        start: (state, action) => {
            state.loading = true;
            state.id = action.payload;
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        setOrderPage: (state, action) => {
            state.order = action.payload;
            state.loading = false;
        }
    }
});

export const { start, error, setOrderPage } = orderPageSlice.actions;

export default orderPageSlice.reducer;
