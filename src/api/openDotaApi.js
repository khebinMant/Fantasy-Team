import axios from "axios";

export const openDotaApi = axios.create({
  baseURL: "https://cors-anywhere-herokuapp.com/https://api.football-data.org/v4",
  headers: { 
        "X-Custom-Header": "beac03eaf8024fc38b1a3c558b41f5ab" ,
        "Access-Control-Allow-Origin": true,
        "Accept": '*/*'
  },
  withCredentials: false,
});
