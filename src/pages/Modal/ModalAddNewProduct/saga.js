import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API } from '../../../constant/api';
import { addingNewProduct } from '../../../selectors';
import { start, success, error } from './newProductSlice';

export default function* addProductSaga() {
    yield takeEvery(start, onAddProduct);
}

function* onAddProduct() {
    const params = yield select(addingNewProduct);
    try {
        yield call(requestAddProduct, params);
        yield put(success());
    } catch (e) {
        yield put(error(e.response));
    }
}

function requestAddProduct(params) {
    const { newProduct } = params;
    const product = {
        product: { ...newProduct }
    };
    return axios.post(API.PRODUCTS, product, {
        headers: {
            Authorization: API.KEY
        }
    });
}
