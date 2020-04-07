import React, { Fragment, useState, useContext, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
//import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
//


const Editar = () => {

    const proyectosContext = useContext(proyectoContext);
    const { tunoeditar, agregarTurno, editarTurnoExito } = proyectosContext;
    
    /*useEffect(()=>{
        guardarTurno(tunoeditar)
    },[tunoeditar])*/

    // State para Emergencia
    const [turno, guardarTurno] = useState({
        name:'',
        /*tipoTurno:'EMERGENCIA',
        doctor:'EMERGENCIA',
        fecha:'',
        hora:''*/
    });

    //const { name, fecha } = tunoeditar;
    const { name } = turno.name;
    // Lee los contenidos del input
    const onChange= e => {
        guardarTurno({
            ...turno,
            [e.target.name] : e.target.value
        })
    }
   
    
    const onSubmitTurno = e => {
        e.preventDefault();
        // agregar al state
        editarTurnoExito(turno)
        console.log(turno);
        
        // Reiniciar el form
        guardarTurno({
            name:'',
            /*tipoTurno:'',
            doctor:'',
            fecha:'',
            hora:''*/
        })
    }
    
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                        <Link to="/" className="btn btn-secondary mt-4">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2>
                            <i className="fas fa-user-md "></i> {''}
                            Editar Turno
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form
                                    onSubmit={onSubmitTurno}
                                    noValidate
                                >
                                    <div className="form-group">
                                        <label>Paciente:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Escriba su nombre"
                                            required
                                            value={name}
                                            onChange={onChange}
                                        />
                                    </div>
                                    {/*<div className="form-group">
                                        <label>Tipo:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="tipoTurno"
                                            value='INTERNACIONES'
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Doctor:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="doctor"
                                            value='INTERNACIONES'
                                            readOnly
                                        />
                                    </div>
                                                        
                                    <div className="form-group row">
                                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                            <input 
                                                type="date" 
                                                className="form-control"
                                                name="fecha"
                                                //onChange={onChange}
                                                
                                            />
                                        </div>                            

                                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                        <div className="col-sm-8 col-lg-4">
                                            <input 
                                                type="time" 
                                                className="form-control" 
                                                name="hora"
                                                //onChange={onChange}
                                            
                                            />
                                        </div> 
                                    </div>    */}                 
                                                                    
                                    <button className="btn btn-success btn-block mb-4">
                                    Aceptar
                                    </button>
                                                           
                                </form>
                            
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
            </Fragment>
        )
    
}

export default  Editar;