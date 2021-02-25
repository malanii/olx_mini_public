import axios from 'axios';
import { takeEvery, call, put, select, debounce } from 'redux-saga/effects';
import {
    getProducts,
    addPriceFilter,
    getProductsErrored,
    setCurrentPage,
    deleteFilterOrigins,
    addFilterOrigins,
    addQuantityPerPageResult,
    setMyProductsListing
} from './myProductsSlice';
import { API } from '../../constant/api';
import { getMyProducts } from '../../selectors';

export default function* myProductsListingSaga() {
    yield takeEvery(getProducts, onGetMyProducts);
}
export function* myProductsFiltersSaga() {
    yield takeEvery(
        [
            setCurrentPage,
            addQuantityPerPageResult,
            addFilterOrigins,
            deleteFilterOrigins,
            addPriceFilter
        ],
        debounceFunction
    );
}
function* debounceFunction() {
    yield debounce(
        300,
        [
            setCurrentPage,
            addQuantityPerPageResult,
            addFilterOrigins,
            deleteFilterOrigins,
            addPriceFilter
        ],
        onGetMyProducts
    );
}

function* onGetMyProducts() {
    const param = yield select(getMyProducts);
    try {
        const response = yield call(requestGetMyProducts, param);
        yield put(
            setMyProductsListing({
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
function requestGetMyProducts(param) {
    const {
        products: { page, perPage, origins, minPrice, maxPrice }
    } = param;
    const originsStrs = origins.join(',');
    const queryString = require('query-string');
    const url = queryString.stringifyUrl(
        {
            url: API.PRODUCTS_FILTER,
            query: {
                editable: true,
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
    return axios.get(url, {
        headers: {
            Authorization: API.KEY
        }
    });
}
