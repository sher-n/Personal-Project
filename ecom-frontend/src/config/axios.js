import axios from 'axios';
import LocalStorage from '../service/LocalStorage';

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
    config => {
        if(config.url.includes("/login") || config.url.includes("/register")) {
            return config;
        }
        const token = LocalStorage.getToken();

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }


        return config;
    },
    err => {
         Promise.reject(err);
        
    }
)

axios.interceptors.response.use(
    response => response,
    err => {
        if (err.response?.status == 401) {
            LocalStorage.removeToken();
            window.location.reload();
            alert("please login");
            return Promise.reject(err);
        }
        return Promise.reject(err);
        
    }
)

export default axios;