import React, {Component} from 'react';
import {Icon, Select, Switch} from 'antd';
import Recaptcha from 'react-recaptcha';
import {NavLink} from 'react-router-dom';

import logo from '../img/logo_head.svg';

const Option = Select.Option;

class RegistrationPage extends Component {
    state = {
        showTwoFactor: false,
        showTwoFactorQr: false,
    };

    handleRegistration = async () => {
        this.setState({
            showTwoFactor: true
        })
    };

    handleChangeSwitch = (value) => {
        console.log(value);

        this.setState({
            showTwoFactorQr: value
        })
    };

    render() {
        const {showTwoFactor, showTwoFactorQr} = this.state;

        if (!showTwoFactor) {
            return (
                <div className="registration-page separate-form">
                    <div className='go-back-btn' onClick={() => window.history.back()}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <hr/>
                        <span>Регистрация</span>
                        <hr/>
                    </div>

                    <form action="">
                        <div className='form-item'>
                            <label htmlFor="">Ваше имя</label>
                            <input
                                type="text"
                                placeholder='Дмитрий'
                                name='name'
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Страна</label>
                            <Select
                                showSearch
                                placeholder="Украина"
                                optionFilterProp="children"
                                onChange={e => console.log(e)}
                            >
                                <Option value="jack">US</Option>
                                <Option value="lucy">UA</Option>
                                <Option value="tom">RU</Option>
                            </Select>
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder='exemple@gmail.com'
                                name='email'
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='password'
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Повторите пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='password'
                            />
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className='form-item checkbox'>
                                <input id='checkbox' type="checkbox" required/>
                                <label htmlFor="checkbox">Принимаю условия</label>
                            </div>

                            <Recaptcha
                                sitekey="6LdXEH0UAAAAANNTQtS9e4ZwdASHuZ5zWM7psA2S"
                                render="explicit"
                                verifyCallback={e => console.log(e)}
                            />
                        </div>

                        <button className='btn authentication-action-btn' onClick={this.handleRegistration}>
                            Зарегистрироваться
                        </button>

                        <div className='go-to-login'>
                            <NavLink to='/login'>
                                Я уже зарегистрирован
                            </NavLink>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="two-factor separate-form">
                    <div className='go-back-btn' onClick={() => this.setState({showTwoFactor: false, showTwoFactorQr: false})}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <span>Спасибо за регистрацию!</span>
                        <hr/>
                    </div>

                    <form action="">
                        <div className="description">
                            Чтобы обезапасить свою учетную запись,
                            мы предлагаем вам использовать двухфакторную
                            аутентификацию
                        </div>

                        <div className='switch-block'>
                            <label htmlFor="">Включить двухфакторную аутентификацию </label>

                            <Switch
                                className='switch'
                                onChange={this.handleChangeSwitch}
                            />
                        </div>

                        {showTwoFactorQr ?
                            <div className='qr-code-block'>
                                <hr/>

                                <div className="description">
                                    Пожалуйста отсканируйте код с помощю приложения Google authenticator на вашем
                                    смартфоне
                                </div>

                                <div className='qrCode'>

                                </div>

                                <hr/>

                                <div className='enter-code'>
                                    Введите полученный код из приложения Google authenticator
                                </div>
                                
                                <div className='form-item'>
                                    <label htmlFor="">Шестизначный код</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            : ''}


                        <div className="or">Или</div>

                        <button className='btn authentication-action-btn'>
                            Перейти к бирже
                        </button>
                    </form>
                </div>

            )
        }
    }
}

export default RegistrationPage;