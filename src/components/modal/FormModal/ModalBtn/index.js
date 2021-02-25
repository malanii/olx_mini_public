import React, { useMemo } from 'react';
import s from './style.module.scss';
import classNames from 'classnames';

function ModalBtn({ text, loading }) {
    const BtnStyle = useMemo(
        () =>
            classNames(s.btn, {
                [s.btnDisable]: loading
            }),
        [loading]
    );

    return (
        <div className={s.wrapperBtn}>
            <button className={BtnStyle} type="submit" disabled={loading}>
                {text}
            </button>
        </div>
    );
}
export default ModalBtn;
