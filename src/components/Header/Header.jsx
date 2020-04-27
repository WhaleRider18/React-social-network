import React from 'react';

import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="logo" />
            <div className={h.loginBlock}>
                { props.isAuth ? <div>Hi, {props.login}</div> : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;