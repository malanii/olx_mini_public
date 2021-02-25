import React from 'react';
import s from './style.module.scss';

function ImgModal({ src, alt }) {
    return (
        <div className={s.imgWrapper}>
            <img className={s.img} alt={alt} src={src} />
        </div>
    );
}
export default ImgModal;
