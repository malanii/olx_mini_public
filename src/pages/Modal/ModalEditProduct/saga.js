import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API } from '../../../constant/api';
import { editProduct } from '../../../selectors';
import { start, success, error } from './editProductSlice';

export default function* editProductSaga() {
    yield takeEvery(start, onEditProduct);
}

function* onEditProduct() {
    const params = yield select(editProduct);
    try {
        yield call(requestEditProduct, params);
        yield put(success());
    } catch (e) {
        yield put(error(e.response));
    }
}

function requestEditProduct(params) {
    const { renewedProduct } = params;
    const { id, ...editedProduct } = renewedProduct;
    const product = {
        product: { ...editedProduct }
    };
    return axios.patch(`${API.PRODUCT_ID}${id}`, product, {
        headers: {
            Authorization: API.KEY
        }
    });
}
