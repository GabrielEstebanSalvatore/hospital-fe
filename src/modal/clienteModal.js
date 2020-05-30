import React, { useContext, useState } from 'react';
import ProyectoContext from '../context/proyectos/proyectoContext';
import AuthContext from '../context/autenticacion/authContext';



//import Input from './input/index'


const ClienteModal = ({ clienteId }) => {

    const proyectoContext = useContext(ProyectoContext);
    const { handleModal } = proyectoContext;
    const authContext = useContext(AuthContext);
    const {editarCliente } = authContext;

    const [handleModalState, setHandleModalState] = useState(
        '',
        //showModal: false,
    );
    const [cliente, guardarCliente] = useState({
        name: '',
        email: '',
        password: '',
        confirmar: '',
        id: clienteId
    });
   

    const showModal = () => {

        handleModal(handleModalState)
    }

    const { name, email, password, confirm_password } = cliente;

    const onChange = e => {
        guardarCliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTurno = e => {
        e.preventDefault();
        // Validar el turno
        if (cliente.name === '') {
            console.log("MODAL Falta el nombre", cliente.name);
            return;
        }
        editarCliente(cliente)

        console.log("MODAL", cliente);

        guardarCliente({
            name: '',
            email: '',
            password: '',
            confirmar: ''


        })

        handleModal(handleModalState)
    }
    return (

        <div className='nuevoturno-container'>

            <div className='nuevoturno-container__header'>
                <p className="text-white">Editar Perfil</p>
            </div>
            <div className='nuevoturno-container__body'>

                <div >
                    <label>Nombre</label>
                    <input
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Escriba su nombre" />
                </div>
               
            
                    <div >
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Escriba su correo"
                            onChange={onChange}
                        />
                    </div>

               
                    <div >
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            
                            placeholder="Escriba su constraseña "
                            onChange={onChange}
                        />
                    </div>
                    <div >
                        <label>Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            name="confirmar"
                            placeholder="Confirmar constraseña "
                            onChange={onChange}
                        />
                    </div>


                <div className='nuevoturno-container__footer'>
                    <button className="btn btn-success" onClick={onSubmitTurno}>Aceptar</button>
                    <button className="btn btn-danger" onClick={showModal} >Cancelar</button>
                </div>

            </div>
        </div>
    )
}
export default ClienteModal