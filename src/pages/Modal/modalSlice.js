import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        openedAddProduct: false,
        openedEditProduct: false,
        openedSubmit: false
    },
    reducers: {
        openAddProduct: (state) => {
            state.openedAddProduct = true;
        },
        openEditProduct: (state) => {
            state.openedEditProduct = true;
        },
        openSubmit: (state) => {
            state.openedSubmit = true;
        },
        closeSubmit: (state) => {
            state.openedSubmit = false;
        },
        close: (state) => {
            state.openedAddProduct = false;
            state.openedEditProduct = false;
            state.openedSubmit = false;
        }
    }
});
export const {
    openAddProduct,
    openEditProduct,
    openSubmit,
    closeSubmit,
    close
} = modalSlice.actions;
export default modalSlice.reducer;
