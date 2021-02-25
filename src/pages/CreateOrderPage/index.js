import React from 'react';
import s from './style.module.scss';
import { useSelector } from 'react-redux';
import { order } from '../../selectors';
import { ComponentsTitles } from '../../settings/componentsData';
import Wrapper from '../../components/common/Wrapper';
import Title from '../../components/common/Title';
import OrderedProducts from '../../components/order/createOrder/OrderedProducts';
import OrderSummary from '../../components/order/createOrder/OrderSummary';

function CreateOrderPage() {
    const { orderedItems, total } = useSelector(order);

    return (
        <Wrapper>
            <div className={s.container}>
                <div className={s.orderItemsWrapper}>
                    <Title text={ComponentsTitles.order} />
                    <OrderedProducts items={orderedItems} />
                    <OrderSummary orderedItems={orderedItems} total={total} />
                </div>
            </div>
        </Wrapper>
    );
}
export default CreateOrderPage;
