import React, { Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
//import {useDispatch, useSelector} from 'react-redux';


class Turnos extends Component {
    

    state = {
        fecha: new Date(),
        doctores: [],
        userSelected:''
        
    }

        async componentDidMount() {
             const res = await axios.get('http://localhost:4000/doctores');
            //console.log(res.data);
            this.setState(
                {
                    doctores: res.data.doctorDB
                }
            );
            //  this.setState({
            //      doctores:res.data.map(user=>{user.name})
            //  })
            console.log(this.state.doctores);  
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

                <div className="row ">
                    <div className="col-12 mb-4">
                        <Link to="/" className="btn btn-secondary mt-4">
                            <i className="fas fa-arrow-circle-left"></i> {''}
                            Volver al Listado
                        </Link>
                    </div>
                    <div className="col-12">
                        <h2>
                            <i className="fas fa-user-md "></i> {''}
                            Gestion de turnos
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                
                                    
                                
                                <form
                                    //onSubmit={this.agregarLibro}
                                >
                                    <div className="form-group">
                                        <label>Paciente:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="pasciente"
                                            placeholder="Escriba su nombre"
                                            required
                                            //value={this.state.titulo}
                                            onChange={this.onInputChange}
                                        />
                                    </div>

                                    {/* SELECT THE USER */}
                                    <div className="form-group">
                                    <label>Doctor:</label>
                                        <select
                                            className="form-control"
                                            // value={this.state.userSelected}
                                            onChange={this.onInputChange}
                                            name="userSelected"
                                            
                                            required>
                                            {
                                                this.state.doctores.map(doctor => (
                                                    <option key={doctor._id} value={doctor}>
                                                        {doctor.name}
                                                    </option>
                                                ))
                                            } 
                                        }
                                        </select>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                            <input 
                                                type="date" 
                                                className="form-control"
                                                name="fecha"
                                                onChange={this.onInputChange} 
                                                
                                            />
                                        </div>                            

                                        <label className="col-sm-4 col-lg-2 col-form-label">Turno</label>
                                        <div className="form-group">
                                            <select onChange={this.onInputChange} name="turno">
                                                <option value="">Selecciona un turno</option>
                                                <option value="A">8:00</option>
                                                <option value="B">9:00</option>
                                                <option value="C">10:00</option>
                                                <option value="C">11:00</option>
                                                <option value="C">12:00</option>
                                                <option value="D">14:00</option>
                                                <option value="E">15:00</option>
                                                <option value="F">16:00</option>
                                                <option value="G">17:00</option>
                                                <option value="G">18:00</option>
                                            </select>
                
                                        </div>
                                    </div>          
                                                
                                    
                                    

                                    <input type="submit" value="Aceptar" className="btn btn-success btn-block mb-4" />

                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
        )
    }
}

export default  Turnos;