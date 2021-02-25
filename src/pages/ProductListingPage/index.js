import React, { useEffect } from 'react';
import s from './style.module.scss';
import ProductListingCard from '../../components/products/ProductListingCard';
import Preloader from '../../components/Preloader';
import Error404 from '../../components/Error404';
import Pagination from '../../components/Pagination';
import NoResultsFound from '../../components/NoResultsFound';
import ProductsFilterContainer from '../../components/filters/ProductsFilterContainer';
import { useDispatch, useSelector } from 'react-redux';
import {
    addFilterByOrigins,
    addPerPageResult,
    addPriceFilter,
    deleteFilterByOrigins,
    setCurrentPage,
    getProducts
} from './productListingSlice';
import { getProductListing } from '../../selectors';
import { useProductsFiltersFromUrl } from '../../bus/hooks/useProductsFiltersFromUrl';
import { useHistory } from 'react-router';
import { createUrlObj } from '../../bus/helper/componentsHelpers';

function ProductListingPage() {
    const {
        products: { items, page, totalItems, perPage, portionSize, origins, minPrice, maxPrice },
        loading,
        error
    } = useSelector(getProductListing);
    const dispatch = useDispatch();
    const history = useHistory();

    const onPageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };
    const { handleSetDefaultFilters } = useProductsFiltersFromUrl({
        history
    });

    const handlePerPageResults = (event) => {
        const { quantity } = event.target.dataset;
        dispatch(addPerPageResult(quantity));
    };

    const handleOriginsChange = (event) => {
        const { name, checked } = event.target;
        checked ? dispatch(addFilterByOrigins(name)) : dispatch(deleteFilterByOrigins(name));
    };
    const handleSubmitFilterByPrice = (minPrice, maxPrice) => {
        dispatch(addPriceFilter({ minPrice, maxPrice }));
    };

    useEffect(() => {
        handleSetDefaultFilters();
    }, []);
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    useEffect(() => {
        const queryString = require('query-string');
        const urlObj = createUrlObj(perPage, page, origins, minPrice, maxPrice);
        history.push({
            pathname: '/products',
            search: decodeURIComponent(queryString.stringify(urlObj))
        });
    }, [perPage, page, origins, minPrice, maxPrice]);

    if (loading) {
        return <Preloader />;
    }
    if (error) {
        return <Error404 />;
    }
    return (
        <div className={s.pageWrapper}>
            <ProductsFilterContainer
                perPage={perPage}
                origins={origins}
                minPrice={minPrice}
                maxPrice={maxPrice}
                handlePerPageResults={handlePerPageResults}
                handleOriginsChange={handleOriginsChange}
                handleSubmitFilterByPrice={handleSubmitFilterByPrice}
            />
            {items.length === 0 && !loading ? (
                <NoResultsFound />
            ) : (
                <div className={s.wrapper}>
                    <div className={s.productsWrapper}>
                        {items.map((el) => {
                            return <ProductListingCard key={el.id} item={el} />;
                        })}
                    </div>
                    <Pagination
                        perPage={+perPage}
                        totalItems={totalItems}
                        page={+page}
                        portionSize={portionSize}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </div>
    );
}
export default ProductListingPage;
