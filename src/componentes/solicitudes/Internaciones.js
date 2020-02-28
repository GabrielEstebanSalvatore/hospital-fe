import React, { Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";



class Internaciones extends Component {
    

    state = {
        name:'',
        tipoTurno:'',
        doctor:'',
        fecha:new Date(),
        hora:''
    }

    async componentDidMount() {

        this.setState({
            tipoTurno: 'INTERNACIONES',
            doctor: 'INTERNACIONES',
        })

        //await axios.post('http://localhost:4000/turnos');
    }
    onSubmit = async (e) => {
        e.preventDefault();
                
        const newTurno = {
            name: this.state.name,
            tipoTurno: this.state.tipoTurno,
            doctor: this.state.doctor,
            fecha: this.state.fecha,
            hora: this.state.hora
        };
        //console.log(newTurno);
        axios.post('http://localhost:4000/turnos', newTurno);
       
        window.location.href = '/';
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date });
    }
     

    render() {
        return (
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
                            Gestion de Internaciones
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form
                                    onSubmit={this.onSubmit}
                                >
                                    <div className="form-group">
                                        <label>Paciente:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Escriba su nombre"
                                            required
                                            value={this.state.name}
                                            onChange={this.onInputChange}
                                        />
                                    </div>
                                    <div className="form-group">
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
                                                onChange={this.onChangeDate}
                                                
                                            />
                                        </div>                            

                                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                        <div className="col-sm-8 col-lg-4">
                                            <input 
                                                type="time" 
                                                className="form-control" 
                                                name="hora"
                                                onChange={this.onInputChange}
                                            
                                            />
                                        </div> 
                                    </div>                      
                                    
                                    <button className="btn btn-success btn-block mb-4">
                                    Aceptar
                                    </button>
                        

                                    {/*<input type="submit" value="Agregar Libro" className="btn btn-success mb-4"/>*/}

                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        )
    }
}

export default  Internaciones;