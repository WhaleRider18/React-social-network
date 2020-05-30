import React from 'react';
import logo from '../../assets/images/logo.png';

import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={h.header}>
            <img src={logo} alt='logo' />
            <div className={h.loginBlock}>
                { props.isAuth ? 
                    <div>
                        <span className={h.loginUser}>
                            Hi, {props.login}
                        </span>
                        <button className='btn' onClick={props.logout}>Logout</button>
                    </div> :
                    <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;