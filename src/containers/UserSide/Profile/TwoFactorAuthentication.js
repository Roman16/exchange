import React from 'react';
import {Switch} from 'antd';

import icon from '../../../assets/img/authentication.svg'

const TwoFactorAuthentication = () => {
    return (
        <div className='two-factor-block section'>
            <div className="title-block">
                <img src={icon} alt=""/>
                2-факторна аутентифікація
            </div>
            <div className='switch-block'>
                <div> Включити двухфакторную <br/>
                    аутентифікацію
                </div>

                <Switch/>
            </div>
        </div>
    )
};

export default TwoFactorAuthentication;