import axios, { AxiosHeaders } from 'axios';

const fakeShopApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
});

fakeShopApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
   if(token) {
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`, true);
    }
    return config;
})



export default fakeShopApi;