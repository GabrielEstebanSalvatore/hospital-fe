import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_TURNOS,
    AGREGAR_TURNO,
    VALIDAR_FORMULARIO,
    ELIMINAR_TURNO,
    //TURNO_ERROR,
    /*
    
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO*/
} from '../../types';

import clienteAxios from '../../config/axios';

const ProyectoState = props => {
    const turnos =[ 
        /*{id:1 ,nombre: 'turnos', estado:false},
        {id:2 ,nombre: 'internacion', estado:true},
        {id:3 ,nombre: 'emergencia', estado:false},
        {id:4 ,nombre: 'salchicha', estado:false}*/
    ]

    const initialState = {

        turnos : [],
        errorformulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD--------ver
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los turnos
    const obtenerTurnos = async () => {
        
        try {
            const respuesta = await clienteAxios.get('/turnos');
            
            dispatch({
                type: OBTENER_TURNOS,
                payload: respuesta.data.turnos
            })
        } catch (error) {
            console.log(error);
            
        }
    
    }

    //Agregar nuevo turno
    const agregarTurno = async turno =>{
        console.log('turno fuera', turno);
        //validar que venga fecha y hora

        let fechaFormatead = turno.fecha + "T" + turno.hora + ":00Z"
        turno.fecha = new Date(fechaFormatead).toISOString()
        
        try {
            const respuesta = await clienteAxios.post('/turnos', turno);
            console.log(respuesta);
            dispatch({
                type: AGREGAR_TURNO,
                payload: respuesta.data
            })
            
        } catch (error) {
            console.log(error);
            
            /*const alerta = {
                msg: 'Hubo un error',
                //categoria: 'alerta-error'
            }
            
            dispatch({
                type: TURNO_ERROR,
                payload: alerta
            })*/
            
        }
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 

    //Elimina un Turno
    const eliminarTurno = async turnoId => {
      try {
          await clienteAxios.delete(`/turnos/${turnoId}`)
          dispatch({
            type: ELIMINAR_TURNO,
            payload: turnoId
        })
      } catch (error) {
          
      }
    }
    
    return (
        <proyectoContext.Provider
            value={{
                turnos:state.turnos,
                errorformulario: state.errorformulario,
                /*
                formulario: state.formulario,
                ,*/
                /*proyecto: state.proyecto,*/
                mostrarFormulario,
                obtenerTurnos,
                agregarTurno,
                mostrarError,
                eliminarTurno
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;