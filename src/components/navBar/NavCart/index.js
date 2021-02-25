import React from 'react';
import s from './style.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart } from '../../../selectors';
import { Images } from '../../../settings/componentsData';

const { cartIcon, cartIconActive } = Images;

function NavCart() {
    const { cartItems } = useSelector(getCart);
    const location = useLocation();
    let imgSrc = location.pathname === '/cart' ? cartIconActive.src : cartIcon.src;
    let counterStyle =
        location.pathname === '/cart' ? `${s.counter} ${s.counterActive}` : `${s.counter}`;
    return (
        <Link to="/cart" className={s.wrapper}>
            <img alt={cartIcon.alt} className={s.img} src={imgSrc} />
            <div className={counterStyle}>{cartItems.length}</div>
        </Link>
    );
}
export default NavCart;
