import React from 'react';
import { useSelector } from 'react-redux';
import FullCart from '../../components/cart/FullCart';
import EmptyCart from '../../components/cart/EmptyCart';
import { getCart } from '../../selectors';

function CartPage() {
    const { cartItems, totalAmount } = useSelector(getCart);

    return cartItems.length === 0 ? (
        <EmptyCart />
    ) : (
        <FullCart items={cartItems} totalPrice={totalAmount} />
    );
}
export default CartPage;
