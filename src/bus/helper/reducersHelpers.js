export function countTotalSum(items) {
    return items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}
export function addQuantityToItem(items, id) {
    return items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : { ...item }
    );
}
export function findItemInCart(items, id) {
    return items.find((item) => item.id === id);
}
export function filterItems(items, id) {
    return items.filter((item) => item.id !== id);
}
