import React, { useReducer } from 'react';
import doctoresContext from './doctoresContext';
import doctoresReducer from './doctoresReducer';
import {
    NUEVO_DOCTOR,
    OBTENER_DOCTORES,
    ELIMINAR_DOCTOR
} from '../../types'

import ClienteAxios from '../../config/axios';

const DoctoresState = props => {
    const initialState= {
        doctores: [],
        doctoresNombre:[]
    };

    const [state, dispatch] = useReducer(doctoresReducer, initialState);

    const nuevoDoc = async doctor => {
        try {
            console.log('NUEVO DOCTOR', doctor);

            const respuesta = await ClienteAxios.post('/doctores', doctor)
            console.log('NUEVO DOCTOR Respuesta',respuesta);

            dispatch({
                type: NUEVO_DOCTOR,
                payload: respuesta.data
            })
            obtenerDoctores();
        } catch (error) {

        }
    }
    /////////////Doctores//////////////////
    const obtenerDoctores = async () => {

        try {
            const respuesta = await ClienteAxios.get('/doctores');
            //console.log('Doctores ',respuesta);

            dispatch({
                type: OBTENER_DOCTORES,
                payload: respuesta.data.doctorDB
            })
        } catch (error) {
            console.log(error);
        }

    }
    const eliminarDoctor = async (DocId)=>{
        try{
            const respuesta = await ClienteAxios.delete(`/doctores/${DocId}`)
            console.log(respuesta, 'eliminar doctor');
            
           dispatch({
                type: ELIMINAR_DOCTOR,
                payload: DocId
            })
            obtenerDoctores();
        }
        catch(error){
            console.log(error);
            
        }
    }

     return(
         <doctoresContext.Provider
            value={{
                doctores: state.doctores,
                doctoresNombre: state.doctoresNombre,
                nuevoDoc,
                obtenerDoctores,
                eliminarDoctor
            }}
         >
            {props.children}
         </doctoresContext.Provider>
    )
}
export default DoctoresState;