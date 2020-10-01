import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    EDITAR_CLIENTE,
    CANTIDAD_CLIENTES
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case EDITAR_CLIENTE:
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cliente: action.payload.cliente,
                cargando: false,
                numeroClientes:null
            }
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                token: action.payload.token,
                cargando: false
                
                
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cliente: action.payload.cliente,
                cargando: false,
                email: action.payload.cliente.email

            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                cliente: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false               
            }
        case CANTIDAD_CLIENTES:
            console.log(action.payload.cuantos);
            return{
                ...state,
                numeroClientes: action.payload.cuantos,
            }
        
        default:
            return state;
    }
}