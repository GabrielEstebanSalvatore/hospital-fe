import React, { useState, useContext} from 'react';
import proyectContext from '../../context/projects/proyectContext';

const Contact = () => {
    const proyectosContext = useContext(proyectContext);
    const {envioCorreo} = proyectosContext;
    
    // State para Emergencia
    const [correo, guardarCorreo] = useState({
        name: '',
        email: '',
        phone: '',
        message:''
    });

    // Extraer nombre de emergencia
    const { name,email,phone,message } = correo;

    // Lee los contenidos del input
    const onChange = e => {
        guardarCorreo({
            ...correo,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitTurno = e => {
        e.preventDefault();

        // agregar al state
        envioCorreo(correo)
        console.log(correo);
        
        // Reiniciar el form
        guardarCorreo({
            name: '',
            email: '',
            phone: '',
            message:''
        })}
        
    return (

        <div className="container">
            <div className="row">
                <div className="col-12 mb-4">

                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-comments "></i> {''}
                            Contactanos
                        </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form
                                onSubmit={onSubmitTurno}
                                noValidate
                            >
                                <div className="form-group">
                                    <label>Nombre:</label>
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

                                <div className="form-group">
                                    <label>Correo:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Escriba su correo"
                                        required
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Telefono:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        placeholder="Escriba su correo"
                                        required
                                        value={phone}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mensaje:</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        name="message"
                                        placeholder="Escriba su mensaje"
                                        required
                                        value={message}
                                        onChange={onChange}
                                    />
                                </div>

                                <button className="btn btn-success btn-block mb-4">
                                    Enviar
                                    </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;