import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { OrderListColors } from '../../../../settings/componentsData';

function OrdersList({ items }) {
    return (
        <div className={s.wrapper}>
            {items.map((el, i) => {
                const { id } = el;
                return (
                    <div key={id} className={s.container}>
                        <div
                            style={{ backgroundColor: OrderListColors[i] }}
                            className={s.orderDesignElement}>
                            {' '}
                        </div>
                        <div className={s.orderInfo}>
                            <p>Order Number:</p>
                            <p>{id}</p>
                        </div>
                        <Link to={`/orders/${id}`}>
                            <FontAwesomeIcon className={s.icon} icon={faAngleRight} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
export default OrdersList;
