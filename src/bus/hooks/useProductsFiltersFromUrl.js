import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
    addFilterByOrigins,
    addPerPageResult,
    addPriceFilter,
    setCurrentPage
} from '../../pages/ProductListingPage/productListingSlice';

export function useProductsFiltersFromUrl({ history }) {
    const dispatch = useDispatch();

    const handleSetDefaultFilters = useCallback(() => {
        const queryString = require('query-string');
        const parsed = queryString.parse(history.location.search);

        parsed?.perPage && dispatch(addPerPageResult(parsed.perPage));
        parsed?.page && dispatch(setCurrentPage(parsed.page));
        parsed?.minPrice && dispatch(addPriceFilter({ minPrice: parsed.minPrice }));
        parsed?.maxPrice && dispatch(addPriceFilter({ maxPrice: parsed.maxPrice }));
        parsed?.maxPrice &&
            parsed?.minPrice &&
            dispatch(addPriceFilter({ minPrice: parsed.minPrice, maxPrice: parsed.maxPrice }));
        parsed?.origins && parsed.origins.split(',').map((i) => dispatch(addFilterByOrigins(i)));
    }, []);
    return {
        handleSetDefaultFilters
    };
}
