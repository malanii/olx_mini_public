import React from 'react';
import s from './style.module.scss';
import { useDispatch } from 'react-redux';
import { remove } from '../../../../pages/CartPage/cartSlice';

function CartDeleteItem({ el }) {
    const dispatch = useDispatch();
    return (
        <button className={s.btn} onClick={() => dispatch(remove(el))}>
            x
        </button>
    );
}
export default CartDeleteItem;
