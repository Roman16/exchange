import React, {Component} from 'react';
import {Icon} from 'antd';
import Recaptcha from 'react-recaptcha';

import logo from '../assets/img/logo_head.svg';


class ChangePasswordPage extends Component {

    render() {
        return (
            <div className="reset-password-page separate-form">
                <div className='go-back-btn' onClick={() => window.history.back()}>
                    <Icon type="left"/>
                    Назад
                </div>

                <div className='logo'>
                    <img src={logo} alt=""/>
                </div>

                <div className='form-title'>
                    <hr/>
                    <span>Изменение пароля</span>
                    <hr/>
                </div>

                <form action="">
                    <div className='form-item'>
                        <label htmlFor="">Актуальный пароль</label>
                        <input
                            type="text"
                            placeholder='**************'
                            name='email'
                        />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="">Новый пароль</label>
                        <input
                            type="password"
                            placeholder='**************'
                            name='email'
                        />
                    </div>

                    <div className='form-item'>
                        <label htmlFor="">Повторите новый пароль</label>
                        <input
                            type="password"
                            placeholder='**************'
                            name='email'
                        />
                    </div>

                    <div className="recaptcha">
                        <Recaptcha
                            sitekey="6LdXEH0UAAAAANNTQtS9e4ZwdASHuZ5zWM7psA2S"
                            render="explicit"
                            verifyCallback={e => console.log(e)}
                        />
                    </div>

                    <button className='btn authentication-action-btn'>Изменить пароль</button>
                </form>
            </div>
        )
    }
}

export default ChangePasswordPage;