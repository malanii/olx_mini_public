import React from 'react';
import s from './style.module.scss';

function CartItemTitle({ text }) {
    return <p className={s.title}>{text}</p>;
}
export default CartItemTitle;
