import axios from "axios";
import cookies from 'react-cookies';
export const DOMAIN = 'http://127.0.0.1:8000/';
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000,
})
http.interceptors.request.use((config) => {
    const token = cookies.load('access_token');
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${cookies.load('access_token')}`
        }
    } else {
        config.headers = {
            ...config.headers,
        }
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})