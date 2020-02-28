import React, { useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

 

const Signup = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarCliente } = authContext;

    //En caso de que el usuairo se haya autenticado o registrado o sea un registro duplicado
    useEffect(()=>{
        if(autenticado){
            props.history.push('/user/signin')
        }
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    },[mensaje,autenticado, props.history, mostrarAlerta])
    // State para iniciar sesión
    const [cliente, guardarCliente] = useState({
        name: '',
        email: '',
        password: '',
        confirmar: ''
    });
   
    // extraer de usuario
    const { name, email, password, confirm_password } = cliente;

    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if( name.trim() === '' || 
            email.trim() === '' || 
            password.trim() === '' || 
            confirm_password.trim() === '' ) {
                mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
                return;
            }

        // Password minimo de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }

        // Los 2 passwords son iguales
        if(password !== confirm_password) {
            mostrarAlerta('Los passwords no son iguales', 'alerta-error');
            return;
        }
        //Pasarlo al action
        registrarCliente({
            name,
            email,
            password
        })
    }

    
    

    
    return(
        <div className="row">
                <div className="col-md-4 mx-auto mt-4">
                    <div className="card">
                        <div className="card-header text-center badge-primary">
                            Registro de Cliente
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit} noValidate>
                                <div className="form-group">
                                { alerta ? 
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>


                                
                                  : null }
                                    <div className="form-group">
                                            <label>Nombre:</label>
                                            <input type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Escriba su nombre"
                                            required
                                            //value={this.state.titulo}
                                            onChange={onChange}
                                            />
                                           
                                    </div>
                                    <div className="form-group">
                                            <label>Correo:</label>
                                            <input type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Escriba su correo electrónico"
                                            required
                                            //value={this.state.titulo}
                                            onChange={onChange}
                                            />
                                            
                                    </div>
                                    <div className="form-group">
                                            <label>Contraseña:</label>
                                            <input type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Escriba su constraseña"
                                            required
                                            //value={this.state.titulo}
                                            onChange={onChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                            <label>Confirmar contraseña:</label>
                                            <input type="password"
                                            className="form-control"
                                            name="confirm_password"
                                            placeholder="Escriba su constraseña nuevamente"
                                            required
                                            //value={this.state.titulo}
                                            onChange={onChange}
                                            />
                                    </div>
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-block ">
                                        Registrarme
                                    </button>
                                    </div>
                                    <Link to={'/user/signin'} className="enlace-cuenta">
                                        Volver a Iniciar Sesión
                                    </Link>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    
   
    
}

export default Signup;