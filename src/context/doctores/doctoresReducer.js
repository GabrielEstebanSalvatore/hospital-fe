import { 
    NUEVO_DOCTOR
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case NUEVO_DOCTOR:
            return{
                ...state,
                nuevoDoctor: action.payload
            }
        
       default:
            return state;
        
    }

}