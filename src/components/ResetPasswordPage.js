import React, {Component} from 'react';
import {Icon} from 'antd';
import Recaptcha from 'react-recaptcha';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo_head.svg';


class ResetPasswordPage extends Component {

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
                    <span>Восстановления пароля</span>
                    <hr/>
                </div>

                <form action="">
                    <div className='form-item'>
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            placeholder='exemple@gmail.com'
                            name='email'
                        />
                    </div>

                    <div className='recaptcha'>
                        <Recaptcha
                            sitekey="6LdXEH0UAAAAANNTQtS9e4ZwdASHuZ5zWM7psA2S"
                            render="explicit"
                            verifyCallback={e => console.log(e)}
                        />
                    </div>

                    <button className='btn authentication-action-btn'>Отправить</button>

                    <div className='go-to-login'>
                        <NavLink to='/login'>
                            Войти
                        </NavLink>
                    </div>
                </form>
            </div>
        )
    }
}

export default ResetPasswordPage;