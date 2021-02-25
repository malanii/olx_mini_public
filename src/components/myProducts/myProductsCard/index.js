import React from 'react';
import { useDispatch } from 'react-redux';
import s from './style.module.scss';
import { Images } from '../../../settings/componentsData';
import { openEditProduct } from '../../../pages/Modal/modalSlice';
import { edit } from '../../../pages/Modal/ModalEditProduct/editProductSlice';

const { editIcon } = Images;

function MyProductsCard({ item }) {
    const dispatch = useDispatch();
    const handleModal = () => {
        dispatch(openEditProduct());
        dispatch(edit(item));
    };
    return (
        <div className={s.container}>
            <p className={s.title}>{item.name}</p>
            <p className={s.originText}>{item.origin}</p>
            <p className={s.text}>{`${item.price}$`}</p>
            <div
                role="button"
                tabIndex={0}
                onKeyDown={handleModal}
                onClick={handleModal}
                className={s.button}>
                <img alt={editIcon.alt} className={s.img} src={editIcon.src} />
            </div>
        </div>
    );
}
export default MyProductsCard;
