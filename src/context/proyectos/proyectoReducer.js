import { 
    //FORMULARIO_PROYECTO, 
    OBTENER_TURNOS,
    AGREGAR_TURNO,
    VALIDAR_FORMULARIO,
    ELIMINAR_TURNO,
    ENVIO_CORREO,
    EDITAR_TURNO,
    EDITAR_TURNO_EXITO,
    //EDITAR_TURNO_ERROR
    //TURNO_ERROR
    
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        /*case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }*/
        case OBTENER_TURNOS:
            //console.log(action.payload); para ver por consola que llega del be
            return {
                ...state,
                turnos: action.payload
            }
        case AGREGAR_TURNO:
        case ENVIO_CORREO:/*REVISAR ENVIO_CORREO*/ 
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                token: action.payload.token,
                cargando: false
                /*turnos: [...state.turnos, action.payload],
                errorformulario: false*/
            }
        case VALIDAR_FORMULARIO:
            return {
            ...state, 
            errorformulario: true
        }   
        case ELIMINAR_TURNO:
            return {
                ...state,
                turnos: state.turnos.filter(turno => turno._id !== action.payload )                
        } 
        case EDITAR_TURNO:
        case EDITAR_TURNO_EXITO:
            //console.log('pr', action.payload);
            
            return{
                ...state,
                tunoeditar: action.payload
            }
        default:
            return state;
    }
}