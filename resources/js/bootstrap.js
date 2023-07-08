
// window._ = import 'lodash';
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
// Add a request interceptor
axios.interceptors.request.use(config => {
    if (token) {
        config.headers['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }
    // You can modify the request config here before it is sent
    return config;
}, error => {
    // Handle request errors
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
    // You can modify the response data here before it is handled
    return response;
}, error => {
    // Handle response errors
    if (error.response && error.response.status === 401) {
        // Handle the 401 Unauthorized error globally
        console.log('Unauthorized request');
        // Perform the desired action for unauthorized requests, such as redirecting to a login page
        location.reload();
    }else if (error.response && error.response.status === 419) {
        console.log('page expired');
        location.reload();
    } else {
        // Handle other errors
        console.log('An error occurred', error);
    }
    return Promise.reject(error);
});



/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */




/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
//     wsHost: import.meta.env.VITE_PUSHER_HOST ? import.meta.env.VITE_PUSHER_HOST : `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
// };
