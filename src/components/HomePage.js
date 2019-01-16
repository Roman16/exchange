import React from 'react';
import {NavLink} from 'react-router-dom';

import img from '../img/illustr.png';

const HomePage = () => {
    return (
        <div className='home-page'>
            <div>
                <div className='title'>Биржа биотоплева <br/> Bioexchange</div>
                <div className='description-to-title'>
                    Создаем конкурентную среду на рынке энергоресурсов
                </div>

                <NavLink to='/registration' className="btn authentication-action-btn">
                    Регистрация
                </NavLink>
            </div>

            <div className='image-block'>
                <img src={img} alt=""/>
            </div>
        </div>
    )
};

export default HomePage;