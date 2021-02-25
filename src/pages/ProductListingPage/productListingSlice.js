import { createSlice } from '@reduxjs/toolkit';

export const productListingSlice = createSlice({
    name: 'productListing',
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
        setProductListing: (state, action) => {
            const {
                products: { items, totalItems }
            } = action.payload;
            state.products.items = items;
            state.products.totalItems = totalItems;
            state.loading = false;
        },
        addFilterByOrigins: (state, action) => {
            state.products.origins = [...state.products.origins, action.payload];
        },
        deleteFilterByOrigins: (state, action) => {
            state.products.origins = state.products.origins.filter(
                (item) => item !== action.payload
            );
        },
        addPriceFilter: (state, action) => {
            const { minPrice, maxPrice } = action.payload;
            state.products.minPrice = minPrice;
            state.products.maxPrice = maxPrice;
        },
        addPerPageResult: (state, action) => {
            state.products.perPage = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.products.page = action.payload;
        }
    }
});

export const {
    getProducts,
    getProductsErrored,
    setProductListing,
    addFilterByOrigins,
    deleteFilterByOrigins,
    addPriceFilter,
    addPerPageResult,
    setCurrentPage
} = productListingSlice.actions;

export default productListingSlice.reducer;
