import { 
    NUEVO_DOCTOR,
    OBTENER_DOCTORES
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case NUEVO_DOCTOR:
            return {
                ...state,
                nuevoDoctor: action.payload
            }
        case OBTENER_DOCTORES:
            return {
                ...state,
                doctoresNombre: action.payload
            }
        default:
            return state;

    }

}