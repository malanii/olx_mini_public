import React from 'react';
import s from './style.module.scss';
import CartButton from '../../common/CartButton';
import { Images } from '../../../settings/componentsData';
import { Buttons } from '../../../settings/componentsData';

const { name, size } = Buttons.productPageCard;
const { productsPage } = Images;

function ProductPageCard({ item }) {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <p className={s.title}>{item.name}</p>
                <p className={s.text}>{item.origin}</p>
                <div className={s.priceWrapper}>
                    <p>{`${item.price}$`}</p>
                </div>
            </div>
            <CartButton item={item} name={name} size={size} />
            <img alt={productsPage.alt} className={s.img} src={productsPage.src} />
        </div>
    );
}
export default ProductPageCard;
