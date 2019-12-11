import axios from 'axios';

const TS = "1576086904";
const APIKEY = "fa3d1ecfc313657edd64bd5eeb726f6c";
const HASH = "41c520a5e9364f81ddc2dd2ecef47d80";

const api = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
    params: {
        apikey: this.APIKEY,
        ts: this.TS,
        hash: this.HASH
    }
});

export default api;