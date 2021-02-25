export function countCartItemsPrice(price, quantity) {
    return price * quantity;
}

export function countPaginationElements(totalItems, perPage, portionSize, portionNumber) {
    let pagesCount = Math.ceil(totalItems / perPage);
    return {
        pagesCount: pagesCount,
        portionCount: Math.ceil(pagesCount / portionSize),
        leftPortionPageNumber: (portionNumber - 1) * portionSize + 1,
        rightPortionPageNumber: portionNumber * portionSize
    };
}

export function countPages(pagesCount) {
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return pages;
}

export function filterPage(p, leftPortionPageNumber, rightPortionPageNumber) {
    return p >= leftPortionPageNumber && p <= rightPortionPageNumber;
}
export function changeDateFormat(date) {
    const dateToChange = new Date(date);
    return dateToChange.toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}
export function countTotalSum(items) {
    return items.reduce((acc, curr) => acc + curr.product.price * curr.count, 0);
}
export function changeFieldsName(array) {
    return array.map((el) => {
        return { value: el.value, label: el.displayName };
    });
}
export function createObjectWithParam(textContent, quantity, total) {
    let arr = [];
    arr.push(quantity, total);
    return textContent.reduce((o, k, i) => ({ ...o, [k]: arr[i] }), {});
}
export function createUrlObj(perPage, page, origins, minPrice, maxPrice) {
    let obj = {};
    perPage !== '10' && (obj.perPage = perPage);
    page !== 1 && (obj.page = page);
    origins.length !== 0 && (obj.origins = origins.join(','));
    minPrice !== 1 && minPrice !== '' && (obj.minPrice = minPrice);
    maxPrice !== '' && (obj.maxPrice = maxPrice);
    return obj;
}
export function checkingStrInArray(origins, data) {
    return origins.join(',').includes(data);
}
