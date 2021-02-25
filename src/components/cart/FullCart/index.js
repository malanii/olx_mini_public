import React from 'react';
import s from './style.module.scss';
import CartSummary from './CartSummary';
import Wrapper from '../../common/Wrapper';
import CartItemCardContainer from './CartItemCardContainer';
import { Images } from '../../../settings/componentsData';

const { alt, src } = Images.cart;

function FullCart({ items, totalPrice }) {
    return (
        <Wrapper>
            <div className={s.container}>
                <div className={s.header}>
                    <img className={s.img} alt={alt} src={src} />
                    <CartSummary totalPrice={totalPrice} items={items} />
                </div>
                <p className={s.title}>Products:</p>
                <div className={s.contentWrapper}>
                    {items.map((el) => (
                        <CartItemCardContainer key={el.id} el={el} />
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}
export default FullCart;
