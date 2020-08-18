import React, { useReducer,useContext } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_TURNOS,
    AGREGAR_TURNO,
    VALIDAR_FORMULARIO,
    ELIMINAR_TURNO,
    ENVIO_CORREO,
    EDITAR_TURNO,
    EDITAR_TURNO_EXITO,
    HANDLE_MODAL,
    CANTIDAD_TURNOS,
    CANTIDAD_TURNOS_CLIENTES,
    OBTENER_TURNOS_DOCTORES
    
} from '../../types';

import clienteAxios from '../../config/axios';

const ProyectoState = props => {
    
    const initialState = {

        turnos : [],
        turnosClientes : [],
        turnosDoctores : [],
        errorformulario: false,
        tunoeditar:null,
        //modal
        modalView: '',
        //showModal: false,
        numeroTurnos:null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)
    
    const handleModal = ( modalView)=>{
        dispatch({
            
                type:  HANDLE_MODAL,
                payload: modalView
            
        })
    }
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
    // Obtener los turnos
    const obtenerTurnos_Doctores = async (email) => {
        //console.log(email);
        

       try {
            const respuesta = await clienteAxios.get(`/turnosparadoctores/${email}`);
            console.log(respuesta,"obtenerTurnos_Doctores");
            
            dispatch({
                type: OBTENER_TURNOS_DOCTORES,
                payload: respuesta.data.turnos
            })
        } catch (error) {
            console.log(error);
            
        }
    
    }
   
    //Agregar nuevo turno
    const agregarTurno = async turno =>{
        //validar que venga fecha y hora

        let fechaFormatead = turno.fecha + "T" + turno.hora + ":00Z"
        turno.fecha = new Date(fechaFormatead).toISOString().slice(0,10)
        
        try {
            const respuesta = await clienteAxios.post('/turnos', turno);
            console.log(respuesta);
            dispatch({
                type: AGREGAR_TURNO,
                payload: respuesta.data
            },obtenerTurnos())
            
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

    //ENVIO DE CORREO
    const envioCorreo = async correo =>{
               
        try {
            const respuesta = await clienteAxios.post('/correo', correo);
            //console.log(respuesta);
            dispatch({
                type: ENVIO_CORREO,
                payload: respuesta.data
            })
            
        } catch (error) {
            console.log(error);
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

     //Editar un Turno
   
    const editarTurno = turno =>{
        dispatch({
            type:  EDITAR_TURNO,
            payload: turno
        })
    }
    
    const editarTurnoExito = async turno =>{
       console.log("put",turno._id);
       
        try {
            const resultado = await clienteAxios.put(`/turnos/${turno._id}`, turno)
            console.log('resultado put:',resultado);
        
            dispatch({
              type: EDITAR_TURNO_EXITO,
              payload: resultado.data.turno
          })
        } catch (error) {
            console.log(error);
        }
    }

    //PARA SACAR UNICAMENTE LA CANTIDAD TURNOS Y PINTARLOS EN HomePage
    const cantidadDeTurnos = async() =>{
        const respuesta = await clienteAxios.get('/turnosclientes')
        try{
            //
            dispatch({
                type:CANTIDAD_TURNOS,
                payload:respuesta.data
            })
        }catch(error){
            console.log(error);
            
        }
    }
    
    //Para llenar con todos los turnos en gestion de Admin
    const cantidadDeTurnosClientes = async() =>{
        const respuesta = await clienteAxios.get('/turnosclientesadmin')
        console.log(respuesta,"cantidadDeTurnosClientes");
        
        try{//PARA LLENAR FORMULARIO DE ADMIN
            dispatch({
                type:CANTIDAD_TURNOS_CLIENTES,
                payload:respuesta.data
            })
        }catch(error){
            console.log(error);
            
        }
    }
    return (
        <proyectoContext.Provider
            value={{
                turnos:state.turnos,
                errorformulario: state.errorformulario,
                tunoeditar:state.tunoeditar,
                modalView: state.modalView,
                showModal: state.showModal,
                numeroTurnos : state.numeroTurnos,
                turnosClientes: state.turnosClientes,
                turnosDoctores: state.turnosDoctores,
                /*
                formulario: state.formulario,
                ,*/
                /*proyecto: state.proyecto,*/
                mostrarFormulario,
                obtenerTurnos,
                agregarTurno,
                mostrarError,
                eliminarTurno,
                envioCorreo,
                editarTurno,
                editarTurnoExito,
                handleModal,
                cantidadDeTurnos,
                cantidadDeTurnosClientes,
                obtenerTurnos_Doctores
                
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;