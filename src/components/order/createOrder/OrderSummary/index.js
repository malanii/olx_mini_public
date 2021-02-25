import React from 'react';
import s from './style.module.scss';
import { LinkButtons, CreateOrderTextContent } from '../../../../settings/componentsData';
import { createObjectWithParam } from '../../../../bus/helper/componentsHelpers';
import { useDispatch } from 'react-redux';
import { start } from '../../../../pages/CreateOrderPage/orderSlice';
import { clearCart } from '../../../../pages/CartPage/cartSlice';
import { useHistory } from 'react-router';

const { createOrder } = LinkButtons;

function OrderSummary({ orderedItems, total }) {
    const result = createObjectWithParam(CreateOrderTextContent, orderedItems.length, `${total}$`);
    const dispatch = useDispatch();
    const history = useHistory();
    const placeOrder = () => {
        dispatch(start());
        dispatch(clearCart());
        history.push('/orders');
    };

    return (
        <div className={s.wrapper}>
            {Object.keys(result).map((key) => (
                <div key={key} className={s.contentWrapper}>
                    <p className={s.text}>{key}</p>
                    <p className={s.text}>{result[key]}</p>
                </div>
            ))}
            <button onClick={placeOrder} className={s.btn} type="submit">
                {createOrder.text}
            </button>
        </div>
    );
}
export default OrderSummary;
