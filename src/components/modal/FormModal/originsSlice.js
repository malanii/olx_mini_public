import { createSlice } from '@reduxjs/toolkit';

export const originsSlice = createSlice({
    name: 'origins',
    initialState: {
        data: [],
        success: false,
        loading: false,
        error: null
    },
    reducers: {
        start: (state) => {
            state.loading = true;
        },
        succeed: (state, action) => {
            state.success = true;
            state.loading = false;
            state.data = action.payload;
        },
        errored: (state, action) => {
            state.success = false;
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const { start, errored, succeed } = originsSlice.actions;
export default originsSlice.reducer;
