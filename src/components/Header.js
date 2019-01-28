import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo_head.svg';

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

    const userNav = [
        {
            title: 'Баланс',
            href: 'support'
        },
        {
            title: 'Замовлення',
            href: 'news'
        },
        {
            title: 'Рахунки',
            href: 'news'
        },
        {
            title: 'Профіль',
            href: 'profile',
            icon: ''
        }
    ];

    const renderMenu = () => {
        const isLoggedIn = sessionStorage.getItem('token') ? true : false;

        if (isLoggedIn) {
            return (
                <Fragment>
                    <NavLink to='/exchange' className='exchange-link'>
                        Перейти до біржі
                    </NavLink>

                    <nav>
                        {userNav.map((item, index) => (
                            <NavLink key={index} to={item.href}>
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                </Fragment>
            )
        } else {
            return (<nav>
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
            )
        }
    };

    return (
        <header>
            <div className='size-container header'>
                <NavLink to='/' className='logo'>
                    <img src={logo} alt=""/>
                </NavLink>

                {renderMenu()}
            </div>
        </header>
    )
};

export default Header;