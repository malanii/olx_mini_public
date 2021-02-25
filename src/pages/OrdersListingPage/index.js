import React, { useEffect } from 'react';
import Wrapper from '../../components/common/Wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { order, ordersListing } from '../../selectors';
import OrdersList from '../../components/order/getOrders/OrdersList';
import Preloader from '../../components/Preloader';
import Error404 from '../../components/Error404';
import { start } from '../../pages/OrdersListingPage/ordersListingSlice';

function OrdersListingPage() {
    const { orders, loading, error } = useSelector(ordersListing);
    const { succeed } = useSelector(order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(start());
    }, [dispatch, succeed]);
    if (loading) {
        return <Preloader />;
    }
    if (error) {
        return <Error404 />;
    }
    return (
        <Wrapper>
            <OrdersList items={orders} />
        </Wrapper>
    );
}
export default OrdersListingPage;
