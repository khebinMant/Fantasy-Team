import axios from 'axios';

export const sportDBApi = axios.create({
    baseURL: `${process.env.REACT_APP_URL}${process.env.REACT_APP_KEY}/`,
}) 