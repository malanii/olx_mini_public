import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { API } from '../../constant/api';
import { start, error, success } from './ordersListingSlice';

export default function* ordersListingSaga() {
    yield takeEvery(start, onGetOrdersListing);
}

function* onGetOrdersListing() {
    try {
        const response = yield call(requestGetOrdersListing);
        yield put(success(response.data.items));
    } catch (e) {
        yield put(error(e.response));
    }
}
function requestGetOrdersListing() {
    return axios.get(API.ORDERS, {
        headers: {
            Authorization: API.KEY
        }
    });
}
