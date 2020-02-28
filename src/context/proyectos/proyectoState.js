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
        {id:1 ,nombre: 'turnos', estado:false},
        {id:2 ,nombre: 'internacion', estado:true},
        {id:3 ,nombre: 'emergencia', estado:false},
        {id:4 ,nombre: 'salchicha', estado:false}
    ]

    const initialState = {

        turnos : [],
        errorformulario: false
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los turnos
    const obtenerTurnos = () => {
        
        dispatch({
            type: OBTENER_TURNOS,
            payload: turnos
        })
    
    }

    //Agregar nuevo turno
    const agregarTurno = async turno =>{
        
        try {
            const resultado = await clienteAxios.post('/turnos', turno )
            console.log(resultado);
            /*dispatch({
                type: AGREGAR_TURNO,
                payload: resultado.data
            })*/
            
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
        dispatch({
            type: ELIMINAR_TURNO,
            payload: turnoId
        })
    }


    /*// Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 

    // Selecciona el Proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }*/


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
                /*mensaje: state.mensaje,
                proyectoActual,*/
                    }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;