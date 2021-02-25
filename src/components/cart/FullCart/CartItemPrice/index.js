import React from 'react';
import s from './style.module.scss';
import { countCartItemsPrice } from '../../../../bus/helper/componentsHelpers';

function CartItemPrice({ price, quantity }) {
    return (
        <div className={s.wrapper}>
            <p className={s.text}>{price}$</p>
            <p className={s.text}>x {quantity}</p>
            <p className={s.text}>{countCartItemsPrice(price, quantity)}$</p>
        </div>
    );
}
export default CartItemPrice;
