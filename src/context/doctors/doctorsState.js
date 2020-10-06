import React, { useReducer } from 'react';
import doctoresContext from './doctorsContext';
import doctoresReducer from './doctorsReducer';
import {
    NUEVO_DOCTOR,
    OBTENER_DOCTORES,
    ELIMINAR_DOCTOR
} from '../../types'

import ClienteAxios from '../../config/axios';

const DoctorsState = props => {
    const initialState= {
        doctors: [],
        doctorsName:[],
        nuevoDoctor:""
    };

    const [state, dispatch] = useReducer(doctoresReducer, initialState);

    const newDoctor = async doctor => {
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

    const obtenerDoctores = async () => {

        try {
            const respuesta = await ClienteAxios.get('/doctores');
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
                doctors: state.doctors,
                doctorsName: state.doctorsName,
                newDoctor,
                obtenerDoctores,
                eliminarDoctor
            }}
         >
            {props.children}
         </doctoresContext.Provider>
    )
}
export default DoctorsState;