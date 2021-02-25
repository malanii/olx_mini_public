import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cartReducer from '../pages/CartPage/cartSlice';
import productListingReducer from '../pages/ProductListingPage/productListingSlice';
import productPageReducer from '../pages/ProductPage/productPageSlice';
import modalReducer from '../pages/Modal/modalSlice';
import newProductReducer from '../pages/Modal/ModalAddNewProduct/newProductSlice';
import myProductsReducer from '../pages/MyProductsPage/myProductsSlice';
import editProductReducer from '../pages/Modal/ModalEditProduct/editProductSlice';
import orderReducer from '../pages/CreateOrderPage/orderSlice';
import ordersListingReducer from '../pages/OrdersListingPage/ordersListingSlice';
import orderPageReducer from '../pages/OrderPage/orderPageSlice';
import originsReducer from '../components/modal/FormModal/originsSlice';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    cart: cartReducer,
    productListing: productListingReducer,
    productPage: productPageReducer,
    modal: modalReducer,
    origins: originsReducer,
    newProduct: newProductReducer,
    editProduct: editProductReducer,
    myProducts: myProductsReducer,
    order: orderReducer,
    ordersListing: ordersListingReducer,
    orderPage: orderPageReducer
});

export const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(rootSagas);
