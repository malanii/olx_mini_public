import React, { useMemo } from 'react';
import s from './style.module.scss';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { add } from '../../../pages/CartPage/cartSlice';

function CartButton({ item, name, size }) {
    const dispatch = useDispatch();
    const addedItem = { ...item, quantity: 1 };

    const btnStyle = useMemo(
        () =>
            classNames(s.btn, {
                [s.small]: size === 'small',
                [s.big]: size === 'big'
            }),
        [size]
    );

    return (
        <button onClick={() => dispatch(add(addedItem))} className={btnStyle}>
            {name}
        </button>
    );
}
export default CartButton;
