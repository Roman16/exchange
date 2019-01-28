import React, {Component} from 'react';
import {Icon} from 'antd';
import Recaptcha from 'react-recaptcha';
import {NavLink} from 'react-router-dom';

import {LoginRequest} from '../actions/UserActions';

import logo from '../assets/img/logo_head.svg';


class LoginPage extends Component {
    state = {
        onTwoFactor: false,

        email: '',
        password: ''
    };

    login = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;
        await LoginRequest({email, password});

        this.props.history.push('/exchange')
    };

    handleChangeInput = (e) => {
        const name = e.target.name,
            value = e.target.value;

        this.setState({
            [name]: value
        })
    };

    render() {
        const {onTwoFactor, email, password} = this.state;

        if (!onTwoFactor) {
            return (
                <div className="login-page separate-form">
                    <div className='go-back-btn' onClick={() => window.history.back()}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <hr/>
                        <span>Вход</span>
                        <hr/>
                    </div>

                    <form onSubmit={this.login}>
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

                        <div className='go-to-reset-pas'>
                            <NavLink to='/reset_password'>
                                Забыли пороль?
                            </NavLink>
                        </div>

                        <Recaptcha
                            sitekey="6LdXEH0UAAAAANNTQtS9e4ZwdASHuZ5zWM7psA2S"
                            render="explicit"
                            verifyCallback={e => console.log(e)}
                        />

                        <button className='btn authentication-action-btn'>
                            Войти
                        </button>

                        <div className='go-to-login'>
                            <NavLink to='/registration'>
                                У меня еще нет учетной записи
                            </NavLink>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <div className="login-page on-two-factor separate-form">
                    <div className='go-back-btn' onClick={() => window.history.back()}>
                        <Icon type="left"/>
                        Назад
                    </div>

                    <div className='logo'>
                        <img src={logo} alt=""/>
                    </div>

                    <div className='form-title'>
                        <hr/>
                        <span>Вход</span>
                        <hr/>
                    </div>

                    <form>
                        <div className='form-item'>
                            <label htmlFor="">Пароль</label>
                            <input
                                type="password"
                                placeholder='*********'
                                name='password'
                            />
                        </div>

                        <button type='submit' className='btn authentication-action-btn'>
                            Войти
                        </button>
                    </form>
                </div>
            )
        }
    }
}

export default LoginPage;