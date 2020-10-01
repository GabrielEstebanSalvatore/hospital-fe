import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Signin = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion,cliente } = authContext;
    
    // En caso de que el password o usuario no exista
    useEffect(() => {
        if(autenticado) {
            props.history.push('/gestion');
        }
 
        if(mensaje) {
            //mostrarAlerta(mensaje.msg, mensaje.categoria);
            mostrarAlerta(mensaje.msg);
        }
        // eslint-disable-next-lines
    }, [mensaje, autenticado, props.history]);

    // State para iniciar sesión
    const [clienteDatos, guardarCliente] = useState({
        email: '',
        password: ''
    });

    // extraer de usuario
    const { email, password } = clienteDatos;

    const onChange = e => {
        guardarCliente({
            ...clienteDatos,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios');
            //mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
        }

        // Pasarlo al action
        iniciarSesion({ email, password });
    }

//noValidate
    return(
        <div className="registro_cliente">
                
                    <div className="card">
                        <div className="card-header text-center badge-primary">
                            Ingreso de Usuarios 
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}  noValidate> 

                           { alerta ? 
                                <div className="alert alert-danger alert-dismissible" role="alert">
                                    {/*<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>*/}
                                    <div> {alerta.msg} </div>
                                    
                                   
                                </div>
                                    : null
                         }
                                
                                <div className="form-group">
                                   
                                    <div className="form-group">
                                            <label>Correo:</label>
                                            <input type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Escriba su correo electrónico"
                                            required
                                            value={email}
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
                                            value={password}
                                            onChange={onChange}
                                            
                                            />
                                    </div>
                                   
                                    <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-block ">
                                        Ingreasar
                                    </button>
                                    </div>
                                    <Link to={'/user/signup'} className="enlace-cuenta">
                                        Obtener Cuenta
                                    </Link>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                
            </div>
        );
    
    }


export default Signin;