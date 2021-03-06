import axios from 'axios';
import {notification} from 'antd';

import {BASE_URL} from '../constants/APIURLS';

const http = (method, url, data, type) => {
    let token = localStorage.getItem('TOKEN');

    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: BASE_URL + url,
            data: data,
            headers: {
                'Content-Type': type || 'application/json',
                'authorization': `Bearer ${token}`
            }
        })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                notification.error({
                    message: error.response.data.errorMessage,
                    description: error.response.data.userMessage,
                });
            });
    })
};

export default http;