import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nodestr-backend.herokuapp.com'
})

export default api;