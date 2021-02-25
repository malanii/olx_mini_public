import { createSlice } from '@reduxjs/toolkit';
export const newProductSlice = createSlice({
    name: 'modal',
    initialState: {
        newProduct: {},
        error: null,
        loading: false,
        succeed: false
    },
    reducers: {
        start: (state, action) => {
            state.loading = true;
            state.newProduct = action.payload;
        },
        success: (state) => {
            state.loading = false;
            state.succeed = true;
            state.newProduct = {};
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.newProduct = {};
        },
        reset: (state) => {
            state.error = null;
            state.loading = false;
            state.succeed = false;
            state.newProduct = {};
        }
    }
});
export const { start, success, error, reset } = newProductSlice.actions;
export default newProductSlice.reducer;
