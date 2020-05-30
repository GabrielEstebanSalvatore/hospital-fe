import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';
//import axios from 'axios';
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
        autenticado: null,
        cliente: null, 
        mensaje: null, 
        cargando: true,
        admin:null,
        numeroClientes:null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registrarCliente = async datos => {
        //console.log('Fuera',datos);
        try {
            const respuesta = await clienteAxios.post('/clientes', datos);
            //console.log("Roberto", respuesta);
            
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
        try{//FIDO
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
            //console.log(error.response);
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

            // Obtener el cliente
            clienteAutenticado()

        }catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                //categoria: 'alerta-error'
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
                console.log(respuesta,'despues');
                
            dispatch({
                type:EDITAR_CLIENTE,
                payload: respuesta.data
            })

            // Obtener el cliente
            clienteAutenticado()

        }catch (error) {
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                //categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }







    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }
    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                cliente: state.cliente,
                mensaje: state.mensaje,
                cargando:state.cargando,
                numeroClientes: state.numeroClientes,
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