
import { isAxiosError } from 'axios';
import { axiosInstance } from './config';

const CACHE_EXPIRATION = 1000 * 60 * parseInt(import.meta.env.VITE_FETCH_CACHE_EXP_MIN, 10) || 5;

export const fetchData = async (
    endpoint: string,
    query: Record<string, string> = {},
    abortSignal: AbortSignal,
): Promise<unknown> => {
    // Turn query object into a string
    const queryString = new URLSearchParams(query).toString();

    // Build fetch url
    const fetchURL = `${endpoint}?${queryString}`;

    // Using simple cache key format
    const cacheKey = `${endpoint}_${queryString}`;

    // Check the storage
    const cacheData = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(`${cacheKey}_time`);

    // On check hit
    if (cacheData && cacheTime) {
        const isExpired = Date.now() - (parseInt(cacheTime, 10) || 0) > CACHE_EXPIRATION;

        if (!isExpired)
            return JSON.parse(cacheData);
    }

    try {
        const response = await axiosInstance.get(fetchURL, { signal: abortSignal });
        // Cache the result
        localStorage.setItem(cacheKey, JSON.stringify(response.data));
        localStorage.setItem(`${cacheKey}_time`, Date.now().toString());

        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.code === 'ERR_CANCELED')
            console.log('Request was canceled by the user');
        throw error;
    }
}
