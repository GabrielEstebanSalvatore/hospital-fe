import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000'
})
//baseURL: 'https://hospital-salvaga.herokuapp.com'
//baseURL: 'http://localhost:4000'
export default clienteAxios;