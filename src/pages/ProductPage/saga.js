import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API } from '../../constant/api';
import { getProductPage } from '../../selectors';
import { start, error, setProductPage } from './productPageSlice';

export default function* productPageSaga() {
    yield takeEvery(start, onProductPage);
}

function* onProductPage() {
    const param = yield select(getProductPage);
    try {
        const response = yield call(requestProductPage, param);
        yield put(setProductPage(response.data));
    } catch (e) {
        yield put(error(e.response));
    }
}

function requestProductPage(param) {
    const { id } = param;
    return axios.get(`${API.PRODUCT_ID}${id}`, {
        headers: {
            Authorization: API.KEY
        }
    });
}
