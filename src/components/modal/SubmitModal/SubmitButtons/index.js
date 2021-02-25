import React from 'react';
import s from './style.module.scss';

function SubmitButtons({ buttons, handleModalActions }) {
    return (
        <div className={s.wrapper}>
            {buttons.map((el) => (
                <button
                    className={s.buttonStyle}
                    key={el.name}
                    onClick={handleModalActions}
                    data-name={el.name}>
                    {el.text}
                </button>
            ))}
        </div>
    );
}
export default SubmitButtons;
