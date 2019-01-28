import React, {Component} from 'react';
import {Icon, Select, Switch} from 'antd';
import Recaptcha from 'react-recaptcha';
import {NavLink} from 'react-router-dom';

import logo from '../assets/img/logo_head.svg';

import {RegistrRequest, GetCountries, LoginRequest} from '../actions/UserActions';

const Option = Select.Option;

class RegistrationPage extends Component {
    state = {
        showTwoFactor: false,
        showTwoFactorQr: false,
        qr: '',
        countries: [],
        totpCode: '',
        user: {
            username: '',
            countryId: 13,
            email: '',
            password: '',
            repeatPassword: ''
        }
    };

    handleRegistration = async (e) => {
        e.preventDefault();

        if (this.state.user.password === this.state.user.repeatPassword) {
            const res = await RegistrRequest(this.state.user);

            this.setState({
                qr: res.qr,
                showTwoFactor: true,
            })
        }
    };

    handleLogin = async (e) => {
        e.preventDefault();
        const {totpCode, user: {email, password}} = this.state;

        await LoginRequest({
            email,
            password,
            totpCode
        });

        this.props.history.push('/exchange');
    };

    handleChangeInput = (e) => {
        const name = e.target.name,
            value = e.target.value;

        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    };

    handleChangeSwitch = (value) => {
        console.log(value);

        this.setState({
            showTwoFactorQr: value
        })
    };

    async componentDidMount() {
        const countries = await GetCountries();
        this.setState({
            countries
        })
    }

    render() {
        const {showTwoFactor, showTwoFactorQr, countries, qr, totpCode, username, email, password, repeatPassword} = this.state;

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

                    <form onSubmit={this.handleRegistration}>
                        <div className='form-item'>
                            <label htmlFor="">Ваше имя</label>
                            <input
                                type="text"
                                placeholder='Дмитрий'
                                value={username}
                                name='username'
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Страна</label>
                            <Select
                                showSearch
                                placeholder="Украина"
                                optionFilterProp="children"
                                onChange={e => this.setState({countryId: +e})}
                            >
                                {countries.map(country => (
                                    <Option key={country.id} value={country.id}>{country.name}</Option>
                                ))}
                            </Select>
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                placeholder='exemple@gmail.com'
                                name='email'
                                value={email}
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='password'
                                value={password}
                                onChange={this.handleChangeInput}
                            />
                        </div>

                        <div className='form-item'>
                            <label htmlFor="">Повторите пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='repeatPassword'
                                value={repeatPassword}
                                onChange={this.handleChangeInput}
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

                        <button className='btn authentication-action-btn'>
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
                    <div className='go-back-btn'
                         onClick={() => this.setState({showTwoFactor: false, showTwoFactorQr: false})}>
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
                                    <img src={qr} alt=""/>
                                </div>

                                <hr/>

                                <div className='enter-code'>
                                    Введите полученный код из приложения Google authenticator
                                </div>

                                <form onSubmit={this.handleLogin}>
                                    <div className='form-item'>
                                        <label htmlFor="">Шестизначный код</label>
                                        <input
                                            type="text"
                                            value={totpCode}
                                            onChange={e => this.setState({totpCode: e.target.value})}
                                        />
                                    </div>

                                    <button className='btn authentication-action-btn'>
                                        Войти
                                    </button>
                                </form>
                            </div>
                            : ''}


                        <div className="or">Или</div>

                        <button className='btn authentication-action-btn' onClick={this.handleLogin}>
                            Перейти к бирже
                        </button>
                    </form>
                </div>

            )
        }
    }
}

export default RegistrationPage;