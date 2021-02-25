import { createSlice } from '@reduxjs/toolkit';
export const editProductSlice = createSlice({
    name: 'editProduct',
    initialState: {
        formState: {},
        editedProduct: {},
        renewedProduct: {},
        updated: false,
        error: null,
        loading: false
    },
    reducers: {
        edit: (state, action) => {
            state.formState = action.payload;
            state.editedProduct = action.payload;
            state.updated = false;
        },
        update: (state, action) => {
            state.formState = action.payload;
            state.renewedProduct = action.payload;
        },
        throwUpdate: (state) => {
            state.formState = state.editedProduct;
            state.renewedProduct = {};
        },
        succeedUpdate: (state) => {
            state.updated = true;
        },
        start: (state) => {
            state.loading = true;
        },
        success: (state) => {
            state.loading = false;
            state.updated = true;
        },
        error: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const {
    edit,
    update,
    throwUpdate,
    succeedUpdate,
    start,
    success,
    error
} = editProductSlice.actions;
export default editProductSlice.reducer;
