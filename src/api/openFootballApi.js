import axios from 'axios';

export const openFootballApi = axios.create({
    baseURL: 'https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League',
}) 