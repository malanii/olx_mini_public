import React from 'react';
import { useSelector } from 'react-redux';
import { addingNewProduct } from '../../../selectors';
import { Images, ModalTitles } from '../../../settings/componentsData';
import s from '../style.module.scss';
import Portal from '../../../components/modal/Portal';
import WrapperForModal from '../../../components/modal/WrapperForModal';
import FormikAddProduct from '../../../components/modal/FormikAddProduct';
import TitleModal from '../../../components/modal/TitleModal';
import ImgModal from '../../../components/modal/ImgModal';
import ResultsMessageModal from '../../../components/modal/ResultsMessageModal';

const { modalError, modalSuccess } = Images;

function ModalAddNewProduct() {
    const { error, loading, succeed } = useSelector(addingNewProduct);
    const { modal } = Images;

    return (
        <Portal>
            <WrapperForModal>
                {error ? (
                    <ResultsMessageModal titleText={ModalTitles.error} img={modalError} />
                ) : succeed ? (
                    <ResultsMessageModal titleText={ModalTitles.success} img={modalSuccess} />
                ) : (
                    <div className={s.wrapper}>
                        <ImgModal alt={modal.alt} src={modal.src} />
                        <div className={s.formWrapper}>
                            <TitleModal title={ModalTitles.addProduct} />
                            <FormikAddProduct loading={loading} />
                        </div>
                    </div>
                )}
            </WrapperForModal>
        </Portal>
    );
}

export default ModalAddNewProduct;
