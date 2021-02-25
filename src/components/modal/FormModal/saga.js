import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { API } from '../../../constant/api';
import { start, errored, succeed } from './originsSlice';

export default function* originsSaga() {
    yield takeEvery(start, onOrigins);
}

function* onOrigins() {
    try {
        const response = yield call(requestGetOrigins);
        yield put(succeed(response.data.items));
    } catch (e) {
        yield put(errored(e.response));
    }
}
function requestGetOrigins() {
    return axios.get(API.PRODUCTS_ORIGINS);
}
