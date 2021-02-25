import React from 'react';
import s from './style.module.scss';
import Title from '../../common/Title';

function ResultsMessageModal({ titleText, img }) {
    const { alt, src } = img;
    return (
        <div className={s.wrapper}>
            <Title text={titleText} />
            <img alt={alt} className={s.img} src={src} />
        </div>
    );
}
export default ResultsMessageModal;
