import React from 'react';
import s from './style.module.scss';

function OrderedProducts({ items }) {
    return (
        <div>
            {items.map((el) => (
                <div key={el.id} className={s.itemWrapper}>
                    <p className={s.title}>{el.name}</p>
                    <p className={s.text}>x {el.quantity}</p>
                    <p className={s.text}>{el.price * el.quantity}$</p>
                </div>
            ))}
        </div>
    );
}
export default OrderedProducts;
