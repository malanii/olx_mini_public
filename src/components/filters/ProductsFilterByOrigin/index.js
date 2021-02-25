import React from 'react';
import s from './style.module.scss';
import { productsFilterButtons, ProductsFilterTitles } from '../../../settings/componentsData';
import { checkingStrInArray } from '../../../bus/helper/componentsHelpers';
import ProductsFilterTitle from '../ProductsFilterTitle';

function ProductsFilterByOrigin({ handleOriginsChange, origins }) {
    return (
        <div>
            <ProductsFilterTitle text={ProductsFilterTitles.origin} />
            <ul className={s.originList}>
                {productsFilterButtons.map((data) => {
                    return (
                        <li key={data}>
                            {data}
                            <input
                                className={s.checkBox}
                                name={data}
                                checked={origins && checkingStrInArray(origins, data)}
                                type="checkbox"
                                onChange={handleOriginsChange}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default ProductsFilterByOrigin;
