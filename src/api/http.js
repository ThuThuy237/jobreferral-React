import axios from "axios";
export const DOMAIN = 'https://mybackenddjangodapp.herokuapp.com/';
export const http = axios.create({
    baseURL: DOMAIN,
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})