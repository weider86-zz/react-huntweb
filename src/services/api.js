import axios from 'axios';

//const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api' });

const api = axios.create({ baseURL: 'http://localhost:3001/api' });

export default api;