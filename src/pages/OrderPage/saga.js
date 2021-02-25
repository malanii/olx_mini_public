import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API } from '../../constant/api';
import { orderPage } from '../../selectors';
import { setOrderPage, start, error } from './orderPageSlice';

export default function* orderPageSaga() {
    yield takeEvery(start, onOrderPage);
}

function* onOrderPage() {
    const param = yield select(orderPage);
    try {
        const response = yield call(requestOrderPage, param);
        yield put(setOrderPage(response.data));
    } catch (e) {
        yield put(error(e.response));
    }
}

function requestOrderPage(param) {
    const { id } = param;
    console.log('id', id);
    return axios.get(`${API.ORDERS_ID}${id}`, {
        headers: {
            Authorization: API.KEY
        }
    });
}
