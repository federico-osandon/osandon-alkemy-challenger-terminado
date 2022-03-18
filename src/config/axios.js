import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'http://challenge-react.alkemy.org',
    headers: {  'Content-Type': 'application/json' }
});

export default clienteAxios;