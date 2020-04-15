import React, { useReducer } from 'react';
import doctoresContext from './doctoresContext';
import doctoresReducer from './doctoresReducer';
import {
    NUEVO_DOCTOR
} from '../../types'

import ClienteAxios from '../../config/axios';

const DoctoresState = props => {
    const initialState= {doctores: []};

    const [state, dispach] = useReducer(doctoresReducer, initialState);

    const nuevoDoc = async doctor => {
        try {
            console.log('NUEVO DOCTOR',doctor);
            
            const respuesta = await ClienteAxios.post('/doctores', doctor)
            //console.log('NUEVO DOCTOR',respuesta);
            
            dispach({
                type: NUEVO_DOCTOR,
                payload: respuesta.data
            })
        } catch (error) {
            
        }
    }

     return(
         <doctoresContext.Provider
            value={{
                doctores: state.doctores,
                nuevoDoc
            }}
         >
            {props.children}
         </doctoresContext.Provider>
    )
}
export default DoctoresState;