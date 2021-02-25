import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../selectors';
import '../../styles/styles.scss';
import ProductPageCard from '../../components/products/ProductPageCard';
import Error404 from '../../components/Error404';
import Preloader from '../../components/Preloader';
import Wrapper from '../../components/common/Wrapper';
import { start } from './productPageSlice';

function ProductPage() {
    const { product, loading, error } = useSelector(getProductPage);
    const match = useRouteMatch('/products/:id');
    const id = match.params.id;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(start(id));
    }, [dispatch]);

    if (loading) {
        return <Preloader />;
    }
    if (error) {
        return <Error404 />;
    }
    return (
        <Wrapper>
            <ProductPageCard item={product} />
        </Wrapper>
    );
}
export default ProductPage;
