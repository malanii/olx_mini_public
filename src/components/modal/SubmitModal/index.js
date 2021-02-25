import React, { useMemo } from 'react';
import s from './style.module.scss';
import classNames from 'classnames';
import SubmitButtons from './SubmitButtons';
import { useDispatch } from 'react-redux';
import { ModalConfirmButtons } from '../../../settings/componentsData';
import { close, closeSubmit } from '../../../pages/Modal/modalSlice';
import {
    start,
    succeedUpdate,
    throwUpdate
} from '../../../pages/Modal/ModalEditProduct/editProductSlice';

function SubmitModal({ openedSubmitModal, title }) {
    const dispatch = useDispatch();

    const modalVisibility = useMemo(
        () =>
            classNames({
                [s.visible]: openedSubmitModal,
                [s.invisible]: !openedSubmitModal
            }),
        [openedSubmitModal]
    );

    const handleModalActions = (e) => {
        const buttonName = e.target.dataset.name;
        switch (buttonName) {
            case 'confirm':
                dispatch(start());
                dispatch(succeedUpdate());
                dispatch(close());
                break;
            case 'cancel':
                dispatch(close());
                break;

            case 'delete':
                dispatch(closeSubmit());
                dispatch(throwUpdate());
                break;
        }
    };

    return (
        <div className={modalVisibility}>
            <p className={s.title}>{title}</p>
            <SubmitButtons buttons={ModalConfirmButtons} handleModalActions={handleModalActions} />
        </div>
    );
}
export default SubmitModal;
