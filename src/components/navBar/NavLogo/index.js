import React from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
import { Images } from '../../../settings/componentsData';

const { logo } = Images;

function NavLogo() {
    return (
        <Link to="/" className={s.wrapper}>
            <img alt={logo.alt} src={logo.src} />
        </Link>
    );
}
export default NavLogo;
