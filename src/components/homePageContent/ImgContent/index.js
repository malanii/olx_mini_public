import React from 'react';
import s from './style.module.scss';
import { Images } from '../../../settings/componentsData';

const { homepage } = Images;

function ImgContent() {
    return (
        <div className={s.wrapper}>
            <img alt={homepage.alt} className={s.img} src={homepage.src} />
        </div>
    );
}
export default ImgContent;
