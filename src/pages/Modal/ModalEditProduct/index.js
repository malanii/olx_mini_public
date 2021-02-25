import React from 'react';
import s from '../style.module.scss';
import { useSelector } from 'react-redux';
import { Images, ModalTitles } from '../../../settings/componentsData';
import { editProduct, openSubmitModal } from '../../../selectors';
import Portal from '../../../components/modal/Portal';
import WrapperForModal from '../../../components/modal/WrapperForModal';
import TitleModal from '../../../components/modal/TitleModal';
import ImgModal from '../../../components/modal/ImgModal';
import FormikEditProduct from '../../../components/modal/FormikEditProduct';
import SubmitModal from '../../../components/modal/SubmitModal';

const { editImg } = Images;

function ModalEditProduct() {
    const openedSubmitModal = useSelector(openSubmitModal);
    const { formState } = useSelector(editProduct);

    return (
        <Portal>
            <WrapperForModal>
                <div className={s.wrapper}>
                    <ImgModal alt={editImg.alt} src={editImg.src} />
                    <div className={s.formWrapper}>
                        <TitleModal title={ModalTitles.editProduct} />
                        <FormikEditProduct data={formState} />
                    </div>
                    {openedSubmitModal && (
                        <SubmitModal
                            openedSubmitModal={openedSubmitModal}
                            title={ModalTitles.submit}
                        />
                    )}
                </div>
            </WrapperForModal>
        </Portal>
    );
}

export default ModalEditProduct;
