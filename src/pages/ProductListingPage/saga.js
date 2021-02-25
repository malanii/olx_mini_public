import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
    setProductListing,
    getProducts,
    getProductsErrored,
    addPriceFilter,
    addFilterByOrigins,
    addPerPageResult,
    deleteFilterByOrigins,
    setCurrentPage
} from './productListingSlice';
import { API } from '../../constant/api';
import { getProductListing } from '../../selectors';

export default function* productsListingSaga() {
    yield takeEvery(
        [
            getProducts,
            addPriceFilter,
            addFilterByOrigins,
            deleteFilterByOrigins,
            addPerPageResult,
            setCurrentPage
        ],
        onGetProducts
    );
}

function* onGetProducts() {
    try {
        const param = yield select(getProductListing);
        const response = yield call(requestGetProducts, param);
        yield put(
            setProductListing({
                products: {
                    items: response.data.items,
                    totalItems: response.data.totalItems
                }
            })
        );
    } catch (e) {
        yield put(getProductsErrored(e.response));
    }
}

function requestGetProducts(param) {
    const {
        products: { page, perPage, origins, minPrice, maxPrice }
    } = param;
    const originsStrs = origins.join(',');
    const queryString = require('query-string');
    const url = queryString.stringifyUrl(
        {
            url: API.PRODUCTS_FILTER,
            query: {
                page: page,
                perPage: perPage,
                origins: originsStrs,
                minPrice: minPrice,
                maxPrice: maxPrice
            }
        },
        {
            skipEmptyString: true
        }
    );
    return axios.get(url);
}
