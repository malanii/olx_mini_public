import React from 'react';
import s from './style.module.scss';
import { addItemsToOrder } from '../../../../pages/CreateOrderPage/orderSlice';
import { useDispatch } from 'react-redux';
import { LinkButtons } from '../../../../settings/componentsData';
import { Link } from 'react-router-dom';
const {
    fullCart: { text, path }
} = LinkButtons;

function CartSummary({ items, totalPrice }) {
    const dispatch = useDispatch();
    return (
        <div className={s.wrapper}>
            <div className={s.priceWrapper}>
                <p className={s.text}>Total:</p>
                <p className={s.text}>{totalPrice}$</p>
            </div>
            <div className={s.btnWrapper}>
                <Link
                    className={s.btn}
                    to={path}
                    onClick={() => dispatch(addItemsToOrder({ items, totalPrice }))}>
                    {text}
                </Link>
            </div>
        </div>
    );
}
export default CartSummary;
