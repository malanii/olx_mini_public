import axios from 'axios';
import { takeEvery, call, put, select } from 'redux-saga/effects';
import { API } from '../../constant/api';
import { order } from '../../selectors';
import { start, success, error } from './orderSlice';

export default function* createOrderSaga() {
    yield takeEvery(start, onCreateOrder);
}

function* onCreateOrder() {
    const params = yield select(order);
    try {
        yield call(requestCreateOrder, params);
        yield put(success());
    } catch (e) {
        yield put(error(e.response));
    }
}

function requestCreateOrder(params) {
    const { orderedItems } = params;
    const arr = orderedItems.map((obj) => {
        return { productId: obj.id, count: obj.quantity };
    });
    const orderObj = {
        order: {
            pieces: [...arr]
        }
    };
    return axios.post(API.ORDERS, orderObj, {
        headers: {
            Authorization: API.KEY
        }
    });
}
