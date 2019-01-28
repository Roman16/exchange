const SERVERS = {
    EXCHANGE: {
        XHR: "https://biofuel-exchange.pro/api/v1/",
        SOCKET: "wss://demo.gofriends.pro",
    },
    PRODUCT: {
        XHR: "https://biofuel-exchange.pro/api/v1/",
        SOCKET: "wss://demo.gofriends.pro",
    },
    DEV: {
        XHR: "https://biofuel-exchange.pro/api/v1/",
        SOCKET: "wss://dev.gofriends.pro",
    },
};

/*
* Getting current URL.
* Aiming to avoid wrong backend server address
* If it is not "localhost" setting SERVERS.PRODUCT
* */

// console.log('document.location', document.location.hostname, typeof document.location.hostname, document.location,);

const generatedDetected = {
    XHR: `https://${document.location.hostname}/api/v1/`,
    SOCKET: `wss://${document.location.hostname}/`,
};


export const BASE_URL = document.location.hostname === "localhost"
    ? SERVERS.DEV.XHR /* <=== set here server what needs for developing -  */
    : generatedDetected.XHR;

/**************************
 */
//USER
export const LOGIN = 'auth/login';

export const REGISTRATION = 'auth/register';

export const COUNTRIES = 'countries';






