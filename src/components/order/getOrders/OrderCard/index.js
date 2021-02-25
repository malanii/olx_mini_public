import React from 'react';
import s from './style.module.scss';
import { changeDateFormat, countTotalSum } from '../../../../bus/helper/componentsHelpers';

function OrderCard({ orderDetails }) {
    const { createdAt, id, pieces } = orderDetails;
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <p className={s.title}>Order Number:</p>
                <p className={`${s.title} ${s.orderNumber}`}>{id}</p>
                <div className={s.titleItemWrapper}>
                    <p className={s.title}>Date:</p>
                    <p className={s.text}>{changeDateFormat(createdAt)}</p>
                </div>
                <div className={s.titleItemWrapper}>
                    <p className={s.title}>Total:</p>
                    <p className={s.text}>{countTotalSum(pieces)}$</p>
                </div>
            </div>
            {pieces.map((el) => {
                const { product, count } = el;
                return (
                    <div className={s.orderedItemsWrapper} key={product.id}>
                        <p className={s.orderedItemTitle}>{product.name}</p>
                        <p className={s.text}>{count}</p>
                        <p className={s.text}>{product.price}$</p>
                    </div>
                );
            })}
        </div>
    );
}
export default OrderCard;
