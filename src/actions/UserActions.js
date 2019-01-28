import api from './request';

import {
    LOGIN,
    REGISTRATION,
    COUNTRIES
} from '../constants/APIURLS';


export const LoginRequest = user => {
    return api('post', LOGIN, user)
        .then(res => {
            sessionStorage.setItem('token', res.token)
        })
};

export const RegistrRequest = user => {
    return api('post', REGISTRATION, user);
};


export const GetCountries = () => {
    return api('get', COUNTRIES);
};

