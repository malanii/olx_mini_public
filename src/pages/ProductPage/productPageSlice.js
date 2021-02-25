import { createSlice } from '@reduxjs/toolkit';

export const productPageSlice = createSlice({
    name: 'productPage',
    initialState: {
        id: null,
        product: {},
        loading: true,
        error: null
    },
    reducers: {
        start: (state, action) => {
            state.loading = true;
            state.id = action.payload;
        },
        setProductPage: (state, action) => {
            state.product = action.payload;
            state.loading = false;
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { start, setProductPage, error } = productPageSlice.actions;

export default productPageSlice.reducer;
