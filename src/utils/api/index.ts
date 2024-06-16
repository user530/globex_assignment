
import { isAxiosError } from 'axios';
import { axiosInstance } from './config';

const CACHE_EXPIRATION = 1000 * 60 * parseInt(import.meta.env.VITE_FETCH_CACHE_EXP_MIN, 10) || 5;

export const fetchData = async (
    endpoint: string,
    query: Record<string, string> = {},
    abortSignal: AbortSignal,
): Promise<unknown> => {
    // Turn query object into a string
    const queryString = getQueryString(query);

    // Build fetch url
    const fetchURL = `${endpoint}?${queryString}`;

    // Using simple cache key format
    const [cacheKey, cacheExp] = generateCacheKeys(endpoint, queryString);

    // Check the storage
    const cacheData = localStorage.getItem(cacheKey);
    const cacheTime = localStorage.getItem(cacheExp);

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
        localStorage.setItem(cacheExp, Date.now().toString());

        return response.data;
    } catch (error) {
        if (isAxiosError(error) && error.code === 'ERR_CANCELED')
            console.log('Request was canceled by the user');
        throw error;
    }
}

const generateCacheKeys = (endpoint: string, queryString?: string): [string, string] => {
    return [`req: ${endpoint}?${queryString}`, `timer: ${endpoint}?${queryString}`];
}

export const clearCache = (endpoint: string, queryString?: string): void => {
    const [cacheKey, cacheExp] = generateCacheKeys(endpoint, queryString);
    localStorage.removeItem(cacheKey);
    localStorage.removeItem(cacheExp);
}

export const getQueryString = (queryObj: Record<string, string>): string => {
    return new URLSearchParams(queryObj).toString();
}