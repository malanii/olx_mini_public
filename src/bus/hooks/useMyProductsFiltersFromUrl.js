import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
    setCurrentPage,
    addQuantityPerPageResult,
    addFilterOrigins,
    addPriceFilter
} from '../../pages/MyProductsPage/myProductsSlice';

export function useMyProductsFiltersFromUrl({ history }) {
    const dispatch = useDispatch();

    const handleSetDefaultFilters = useCallback(() => {
        const queryString = require('query-string');
        const parsed = queryString.parse(history.location.search);

        parsed?.perPage && dispatch(addQuantityPerPageResult(parsed?.perPage));
        parsed?.page && dispatch(setCurrentPage(parsed.page));
        parsed?.minPrice && dispatch(addPriceFilter({ minPrice: parsed.minPrice }));
        parsed?.maxPrice && dispatch(addPriceFilter({ maxPrice: parsed.maxPrice }));
        parsed?.origins && parsed.origins.split(',').map((i) => dispatch(addFilterOrigins(i)));
        parsed?.maxPrice &&
            parsed?.minPrice &&
            dispatch(addPriceFilter({ minPrice: parsed.minPrice, maxPrice: parsed.maxPrice }));
    }, []);
    return {
        handleSetDefaultFilters
    };
}
