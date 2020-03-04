import { 
    //FORMULARIO_PROYECTO, 
    OBTENER_TURNOS,
    AGREGAR_TURNO,
    VALIDAR_FORMULARIO,
    ELIMINAR_TURNO,
    //TURNO_ERROR
    /*
    
    
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO*/
} from '../../types';


export default (state, action) => {
    switch(action.type) {
        /*case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }*/
        case OBTENER_TURNOS:
            return {
                ...state,
                turnos: action.payload
            }
        case AGREGAR_TURNO:
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
        /*case TURNO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }*/
        
        /*case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload )
            }*/
        /*case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload ),
                proyecto: null
            }
       */
        default:
            return state;
    }
}