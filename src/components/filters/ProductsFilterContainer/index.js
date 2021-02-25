import React from 'react';
import ProductsFilterByPrice from '../ProductsFilterByPrice';
import ProductsFilterByOrigin from '../ProductsFilterByOrigin';
import ProductsFilterByPerPage from '../ProductsFilterByPerPage';
import ProductsFilterWrapper from '../ProductsFilterWrapper';

function ProductsFilterContainer({
    perPage,
    origins,
    minPrice,
    maxPrice,
    handlePerPageResults,
    handleOriginsChange,
    handleSubmitFilterByPrice
}) {
    return (
        <ProductsFilterWrapper>
            <ProductsFilterByPerPage
                perPage={perPage}
                handlePerPageResults={handlePerPageResults}
            />
            <ProductsFilterByPrice
                minPrice={minPrice}
                maxPrice={maxPrice}
                handleSubmitFilterByPrice={handleSubmitFilterByPrice}
            />
            <ProductsFilterByOrigin origins={origins} handleOriginsChange={handleOriginsChange} />
        </ProductsFilterWrapper>
    );
}
export default ProductsFilterContainer;
