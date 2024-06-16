import axios, { CreateAxiosDefaults } from 'axios';

const axiosConfig: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": 'application/json',
    },
    timeout: 10000,
};

export const axiosInstance = axios.create(axiosConfig);