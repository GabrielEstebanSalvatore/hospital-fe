import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Signup = (props) => {

    // extraer los valores del context
    const alertaContext = useContext(AlertaContext);
    const { alert, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registrarCliente } = authContext;

    //En caso de que el usuairo se haya autenticado o registrado o sea un registro duplicado
    useEffect(() => {
        if (authenticated) {
            props.history.push('/user/signin')
        }
        if (message) {
            mostrarAlerta(message.msg);
        }
        // eslint-disable-next-line
    }, [message, authenticated, props.history])
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
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if (name.trim() === '' ||
            email.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        // Password minimo de 6 caracteres
        if (password.length < 6) {
            mostrarAlerta('El password debe ser de al menos 6 caracteres');
            return;
        }

        // Los 2 passwords son iguales
        if (password !== confirm_password) {
            mostrarAlerta('Los passwords no son iguales');
            return;
        }
        //Pasarlo al action
        registrarCliente({
            name,
            email,
            password
        })
    }

    //noValidate
    return (
        <div className="ingreso_cliente">

            <div className="card">
                <div className="card-header text-center badge-primary">
                    Registro de Cliente
                        </div>
                <div className="card-body">
                    <form onSubmit={onSubmit} noValidate >
                        <div className="form-group">
                            {alert ?
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <div> {alert.msg} </div>

                                </div>
                                : null}
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
    );



}

export default Signup;