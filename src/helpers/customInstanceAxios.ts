import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.shrtco.de/v2/shorten?url="
});

export default instance;