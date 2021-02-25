import React from 'react';
import s from './style.module.scss';
import { Images } from '../../../settings/componentsData';

const { productsFilter } = Images;

function ProductsFilterWrapper({ children }) {
    return (
        <div className={s.wrapper}>
            {children}
            <img className={s.img} alt={productsFilter.alt} src={productsFilter.src} />
        </div>
    );
}

export default ProductsFilterWrapper;
