import { all } from 'redux-saga/effects';
import productsListingSaga from '../pages/ProductListingPage/saga';
import myProductsListingSaga, { myProductsFiltersSaga } from '../pages/MyProductsPage/saga';
import addProductSaga from '../pages/Modal/ModalAddNewProduct/saga';
import editProductSaga from '../pages/Modal/ModalEditProduct/saga';
import createOrderSaga from '../pages/CreateOrderPage/saga';
import orderPageSaga from '../pages/OrderPage/saga';
import ordersListingSaga from '../pages/OrdersListingPage/saga';
import productPageSaga from '../pages/ProductPage/saga';
import originsSaga from '../components/modal/FormModal/saga';

export default function* rootSaga() {
    yield all([
        productsListingSaga(),
        myProductsFiltersSaga(),
        addProductSaga(),
        editProductSaga(),
        createOrderSaga(),
        orderPageSaga(),
        ordersListingSaga(),
        productPageSaga(),
        originsSaga(),
        myProductsListingSaga()
    ]);
}
