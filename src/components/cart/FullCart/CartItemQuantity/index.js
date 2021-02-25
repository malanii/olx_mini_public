import React from 'react';
import s from './style.module.scss';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../../../../pages/CartPage/cartSlice';
import CartQuantityInput from '../CartQuantityInput';

function CartItemQuantity({ element, quantity }) {
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <button onClick={() => dispatch(decrementQuantity(element))} className={s.btn}>
                -
            </button>
            <CartQuantityInput element={element} quantity={quantity} />
            <button onClick={() => dispatch(incrementQuantity(element))} className={s.btn}>
                +
            </button>
        </div>
    );
}
export default CartItemQuantity;
