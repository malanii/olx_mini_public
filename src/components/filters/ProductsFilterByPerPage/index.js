import React from 'react';
import s from './style.module.scss';
import { productsPerPageButtons, ProductsFilterTitles } from '../../../settings/componentsData';
import ProductsFilterTitle from '../ProductsFilterTitle';

function ProductsFilterByPerPage({ perPage, handlePerPageResults }) {
    return (
        <div>
            <ProductsFilterTitle text={ProductsFilterTitles.perPage} />
            <div className={s.buttonsWrapper}>
                {productsPerPageButtons.map((element) => (
                    <button
                        onClick={handlePerPageResults}
                        data-quantity={element.data}
                        key={element.value}
                        className={
                            perPage === element.data
                                ? `${s.button} ${s.buttonActive}`
                                : `${s.button}`
                        }>
                        {element.value}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default ProductsFilterByPerPage;
