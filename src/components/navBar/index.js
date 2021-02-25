import React from 'react';
import s from './style.module.scss';
import NavLogo from './NavLogo';
import NavCart from './NavCart';
import NavMenu from './NavMenu';
import NavLogin from './NavLogin';
import NavAddProduct from './NavAddProduct';

function NavBar() {
    return (
        <div className={s.wrapper}>
            <NavLogo />
            <div className={s.container}>
                <NavMenu />
                <NavAddProduct />
                <NavCart />
            </div>
            <NavLogin />
        </div>
    );
}
export default NavBar;
