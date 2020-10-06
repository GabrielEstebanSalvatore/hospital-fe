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
                doctorsName: action.payload
            }
        case ELIMINAR_DOCTOR:
            return{
                ...state,
                doctors: state.doctors.filter(doctor => doctor._id !== action.payload)
            }
        default:
            return state;

    }

}
    