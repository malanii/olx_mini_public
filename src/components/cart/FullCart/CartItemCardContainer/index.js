import React from 'react';
import s from './style.module.scss';
import CartItemQuantity from '../CartItemQuantity';
import CartItemTitle from '../CartItemTitle';
import CartDeleteItem from '../CartDeleteItem';
import CartItemPrice from '../CartItemPrice';

function CartItemCardContainer({ el }) {
    return (
        <div className={s.content} key={el.id}>
            <div className={s.quantityTitleWrapper}>
                <CartItemTitle text={el.name} />
                <CartItemQuantity element={el} quantity={el.quantity} />
            </div>
            <CartItemPrice quantity={el.quantity} price={el.price} />
            <CartDeleteItem el={el} />
        </div>
    );
}
export default CartItemCardContainer;
