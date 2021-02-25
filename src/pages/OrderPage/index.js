import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Wrapper from '../../components/common/Wrapper';
import OrderCard from '../../components/order/getOrders/OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { orderPage } from '../../selectors';
import Preloader from '../../components/Preloader';
import Error404 from '../../components/Error404';
import { start } from '../../pages/OrderPage/orderPageSlice';

function OrderPage() {
    const { order, loading, error } = useSelector(orderPage);
    const match = useRouteMatch('/orders/:id');
    const id = match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(start(id));
    }, [dispatch]);
    if (loading) {
        return <Preloader />;
    }
    if (error) {
        return <Error404 />;
    }
    return (
        <Wrapper>
            <OrderCard orderDetails={order} />
        </Wrapper>
    );
}
export default OrderPage;
