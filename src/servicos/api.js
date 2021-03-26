import axios from 'axios';

const api = axios.create({
    baseURL : 'https://DWMbackend.faelpf1.repl.co',
});
export default api;