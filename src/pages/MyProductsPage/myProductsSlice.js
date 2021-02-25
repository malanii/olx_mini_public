import { createSlice } from '@reduxjs/toolkit';

export const myProductsSlice = createSlice({
    name: 'myProductsListing',
    initialState: {
        products: {
            items: [],
            page: 1,
            totalItems: 0,
            perPage: '10',
            portionSize: 5,
            origins: [],
            minPrice: '',
            maxPrice: ''
        },
        loading: true,
        error: null
    },
    reducers: {
        getProducts: (state) => {
            state.loading = true;
        },
        getProductsErrored: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setMyProductsListing: (state, action) => {
            const {
                products: { items, totalItems }
            } = action.payload;
            state.products.items = items;
            state.products.totalItems = totalItems;
            state.loading = false;
        },
        setCurrentPage: (state, action) => {
            state.products.page = action.payload;
        },
        addQuantityPerPageResult: (state, action) => {
            state.products.perPage = action.payload;
            state.products.page = 1;
        },
        addFilterOrigins: (state, action) => {
            state.products.origins = [...state.products.origins, action.payload];
            state.products.page = 1;
        },
        deleteFilterOrigins: (state, action) => {
            state.products.origins = state.products.origins.filter(
                (item) => item !== action.payload
            );
            state.products.page = 1;
        },
        addPriceFilter: (state, action) => {
            const { minPrice, maxPrice } = action.payload;
            state.products.minPrice = minPrice;
            state.products.maxPrice = maxPrice;
            state.products.page = 1;
        }
    }
});

export const {
    getProducts,
    getProductsErrored,
    setMyProductsListing,
    setCurrentPage,
    addQuantityPerPageResult,
    addFilterOrigins,
    deleteFilterOrigins,
    addPriceFilter
} = myProductsSlice.actions;

export default myProductsSlice.reducer;
