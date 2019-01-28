import React from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo_footer.svg';

const Footer = () => {
    const nav = [
        {
            title: 'About',
            href: 'support'
        },
        {
            title: 'Terms of Use',
            href: 'news'
        },
        {
            title: 'Privacy Policy',
            href: 'support'
        },
        {
            title: 'Contact',
            href: 'news'
        }
    ];
    return (
        <footer>
            <div className='size-container footer'>
                <img src={logo} alt=""/>

                <nav>
                    {nav.map((item, index) => (
                        <NavLink key={index} to={item.href}>
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </footer>
    )
};

export default Footer;