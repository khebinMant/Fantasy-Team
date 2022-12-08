import axios from 'axios';

export const openDotaApi = axios.create({
    baseURL: 'https://api.opendota.com/api'
}) 