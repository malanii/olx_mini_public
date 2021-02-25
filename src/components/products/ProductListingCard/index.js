import React from 'react';
import s from './style.module.scss';
import CartButton from '../../common/CartButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Buttons } from '../../../settings/componentsData';

const { name, size } = Buttons.productListingCard;

function ProductListingCard({ item }) {
    return (
        <div className={s.container}>
            <p className={s.title}>{item.name}</p>
            <CartButton item={item} name={name} size={size} />
            <p className={s.text}>{`${item.price}$`}</p>
            <p className={s.text}>{item.origin}</p>
            <Link className={s.button} to={`/products/${item.id}`}>
                <FontAwesomeIcon className={s.icon} icon={faAngleDoubleRight} />
            </Link>
        </div>
    );
}
export default ProductListingCard;
