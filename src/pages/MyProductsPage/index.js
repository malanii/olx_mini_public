import React, { useEffect } from 'react';
import s from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import NoResultsFound from '../../components/NoResultsFound';
import {
    addingNewProduct,
    editProduct,
    getMyProducts,
    openEditProductModal
} from '../../selectors';
import MyProductsCard from '../../components/myProducts/myProductsCard';
import ModalEditProduct from '../Modal/ModalEditProduct';
import Error404 from '../../components/Error404';
import Preloader from '../../components/Preloader';
import Pagination from '../../components/Pagination';
import {
    getProducts,
    setCurrentPage,
    addQuantityPerPageResult,
    addFilterOrigins,
    deleteFilterOrigins,
    addPriceFilter
} from './myProductsSlice';
import ProductsFilterContainer from '../../components/filters/ProductsFilterContainer';
import { createUrlObj } from '../../bus/helper/componentsHelpers';
import { useHistory } from 'react-router';
import { useMyProductsFiltersFromUrl } from '../../bus/hooks/useMyProductsFiltersFromUrl';

function MyProductsPage() {
    const openModal = useSelector(openEditProductModal);
    const {
        products: { items, page, totalItems, perPage, portionSize, origins, minPrice, maxPrice },
        loading,
        error
    } = useSelector(getMyProducts);
    const { succeed } = useSelector(addingNewProduct);
    const { updated } = useSelector(editProduct);
    const dispatch = useDispatch();
    const history = useHistory();

    const { handleSetDefaultFilters } = useMyProductsFiltersFromUrl({
        history
    });
    useEffect(() => {
        handleSetDefaultFilters();
    }, []);
    useEffect(() => {
        dispatch(getProducts());
    }, [succeed, updated]);
    useEffect(() => {
        const queryString = require('query-string');
        const urlObj = createUrlObj(perPage, page, origins, minPrice, maxPrice);
        history.push({
            pathname: '/my_products',
            search: decodeURIComponent(queryString.stringify(urlObj))
        });
    }, [perPage, page, origins, minPrice, maxPrice]);
    const onPageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };
    const handlePerPageResults = (event) => {
        const { quantity } = event.target.dataset;
        dispatch(addQuantityPerPageResult(quantity));
    };
    const handleOriginsChange = (event) => {
        const { name, checked } = event.target;
        checked ? dispatch(addFilterOrigins(name)) : dispatch(deleteFilterOrigins(name));
    };
    const handleSubmitFilterByPrice = (minPrice, maxPrice) => {
        dispatch(addPriceFilter({ minPrice, maxPrice }));
    };
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
                            return <MyProductsCard key={el.id} item={el} />;
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
            {openModal && <ModalEditProduct />}
        </div>
    );
}
export default MyProductsPage;
