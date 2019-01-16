import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo_head.svg';

const Header = () => {
    const nav = [
        {
            title: 'Поддержка',
            href: 'support'
        },
        {
            title: 'Новости',
            href: 'news'
        }
    ];

    return (
        <header>
            <div className='size-container header'>
                <NavLink to='/' className='logo'>
                    <img src={logo} alt=""/>
                </NavLink>

                <nav>
                    {nav.map((item, index) => (
                        <NavLink key={index} to={item.href}>
                            {item.title}
                        </NavLink>
                    ))}

                    <div className='authentication-link'>
                        <NavLink to='/registration' className='registration-link'>
                            Регистрация
                        </NavLink>

                        <NavLink to='/login' className='btn'>
                            Войти
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;