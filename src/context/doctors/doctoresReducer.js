import { 
    NUEVO_DOCTOR,
    OBTENER_DOCTORES,
    ELIMINAR_DOCTOR
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
        case ELIMINAR_DOCTOR:
            return{
                ...state,
                doctores: state.doctores.filter(doctor => doctor._id !== action.payload)
            }
        default:
            return state;

    }

}
    