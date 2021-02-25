import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './style.module.scss';
import { openAddProduct } from '../../../pages/Modal/modalSlice';
import { openAddProductModal } from '../../../selectors';
import ModalAddNewProduct from '../../../pages/Modal/ModalAddNewProduct';
import { Buttons } from '../../../settings/componentsData';

const { addProduct } = Buttons;

function NavAddProduct() {
    const openModal = useSelector(openAddProductModal);
    const dispatch = useDispatch();
    const handleModal = () => {
        dispatch(openAddProduct());
    };
    return (
        <div className={s.wrapper}>
            <button className={s.text} onClick={handleModal}>
                {addProduct.name}
            </button>
            {openModal && <ModalAddNewProduct />}
        </div>
    );
}
export default NavAddProduct;
