import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTRO_ERROR,
    REGISTRO_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION,
    EDITAR_CLIENTE,
    CANTIDAD_CLIENTES
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: props.token ? props.token : localStorage.getItem('token'),
        authenticated: null,
        client: null, 
        message: null, 
        loading: true,
        admin:null,
        numeroClientes:null,
        email:null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registrarCliente = async datos => {
        try {
            const respuesta = await clienteAxios.post('/clientes', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });
            
            // Obtener el cliente
            clienteAutenticado()
        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }
    const cantidadDeClinetes = async() =>{
        const respuesta = await clienteAxios.get('/clientes')
        try{
            console.log(respuesta.data.cuantos,'cantidadDeClinetes');
            dispatch({
                type:CANTIDAD_CLIENTES,
                payload:respuesta.data
            })
        }catch(error){
            console.log(error);
        }
    }
    
    //Retorna el usuario autenticado 
    const clienteAutenticado= async ( )=>{
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
            //console.log('Token : ',token);
        }
        try {
            var headers = {
                "x-auth-token": token
            }
            //ADMIN O USER
            const respuesta = await clienteAxios.get('/auth', {headers});
            console.log('cliente',respuesta.data);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            });
            
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
            })
            
        }
    }

    //Cuando el cliente inicia sesión
    const iniciarSesion= async datos => {
        try{
            const respuesta = await clienteAxios.post('/auth', datos);
            dispatch({
                type:LOGIN_EXITOSO,
                payload: respuesta.data
            })
            clienteAutenticado()

        }catch (error) {
            const alerta = {
                msg: error.response.data.msg,
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    //Editar Cliente
    const editarCliente= async datos => {
        try{
            console.log(datos,'antes');
            const respuesta = await clienteAxios.put(`/clientes/${datos.id}`, datos);
            dispatch({
                type:EDITAR_CLIENTE,
                payload: respuesta.data
            })

            clienteAutenticado()

        }catch (error) {
            const alerta = {
                msg: error.response.data.msg,
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                client: state.client,
                message: state.message,
                loading:state.loading,
                numeroClientes: state.numeroClientes,
                email: state.email,
                registrarCliente,
                clienteAutenticado,
                iniciarSesion,
                cerrarSesion,
                editarCliente,
                cantidadDeClinetes
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;