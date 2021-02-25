import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.scss';
import { close } from '../../../pages/Modal/modalSlice';
import { reset } from '../../../pages/Modal/ModalAddNewProduct/newProductSlice';

const WrapperForModal = ({ children }) => {
    const dispatch = useDispatch();

    return (
        <div className={s.wrapper}>
            <button className={s.closeIcon} onClick={() => dispatch(close(), dispatch(reset()))}>
                x
            </button>
            <div>{children}</div>
        </div>
    );
};

export default WrapperForModal;
