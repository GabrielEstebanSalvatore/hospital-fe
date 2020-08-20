import { 
    OBTENER_TURNOS,
    AGREGAR_TURNO,
    VALIDAR_FORMULARIO,
    ELIMINAR_TURNO,
    ENVIO_CORREO,
    EDITAR_TURNO,
    EDITAR_TURNO_EXITO,
    HANDLE_MODAL,
    CANTIDAD_TURNOS,
    CANTIDAD_TURNOS_CLIENTES,
    OBTENER_TURNOS_DOCTORES
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        case HANDLE_MODAL:
            return {
                ...state,
                modalView : action.payload
        }
        
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
                turnoeditar: action.payload
            }
        case CANTIDAD_TURNOS:
            console.log(action.payload.cuantos);
            return{
         
                ...state,
                
                numeroTurnos: action.payload.cuantos,
            }
        case CANTIDAD_TURNOS_CLIENTES:
            return {
                ...state,

                turnosClientes: action.payload.turnos,
            }

        case OBTENER_TURNOS_DOCTORES:
            return {
                ...state,

                turnosDoctores: action.payload,
              
            }

        default:
            return state;
    }
}