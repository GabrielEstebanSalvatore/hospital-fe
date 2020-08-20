import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://hospital-salvaga.herokuapp.com'
})
//baseURL: 'https://hospital-salvaga.herokuapp.com'
//baseURL: 'http://localhost:4000'
export default clienteAxios;