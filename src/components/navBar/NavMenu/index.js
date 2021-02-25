import React from 'react';
import s from './style.module.scss';
import { NavLink } from 'react-router-dom';
import { navMenuData } from '../../../settings/componentsData';

function NavMenu() {
    return (
        <ul className={s.nav}>
            {navMenuData.map((element) => (
                <li key={element.key}>
                    {element.path === '/' ? (
                        <NavLink
                            className={s.navItem}
                            activeClassName={s.navItemActive}
                            exact
                            to={element.path}>
                            {element.linkName}
                        </NavLink>
                    ) : (
                        <NavLink
                            className={s.navItem}
                            activeClassName={s.navItemActive}
                            to={element.path}>
                            {element.linkName}
                        </NavLink>
                    )}
                </li>
            ))}
        </ul>
    );
}
export default NavMenu;
