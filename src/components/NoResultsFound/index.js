import React from 'react';
import s from './style.module.scss';
import { Images } from '../../settings/componentsData';

const { noResultsFound } = Images;

function NoResultsFound() {
    return (
        <div className={s.wrapper}>
            <img alt={noResultsFound.alt} className={s.img} src={noResultsFound.src} />
            <p className={s.text}>No results found.</p>
        </div>
    );
}
export default NoResultsFound;
