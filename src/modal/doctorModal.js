import React, { useContext, useState } from 'react';
import ProyectoContext from '../context/projects/proyectoContext';
import DoctoresContext from '../context/doctors/doctoresContext';



//import Input from './input/index'


const DoctorModal = () => {

    const proyectoContext = useContext(ProyectoContext);
    const { handleModal } = proyectoContext;
    const doctoresContext = useContext(DoctoresContext);
    const {nuevoDoc } = doctoresContext;

    const [handleModalState] = useState(
        '',
        //showModal: false,
    );
    const [doctor, guardarDoctor] = useState({
        name: '',
        email: '',
        profesion: '',
        telefono: '',
        direccion: ''
    });
   

    const showModal = () => {

        handleModal(handleModalState)
    }

   

    const onChange = e => {
        guardarDoctor({
            ...doctor,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitTurno = e => {
        e.preventDefault();
        // Validar el turno
        if (doctor.name === '') {
            console.log("MODAL Falta el nombre", doctor.name);
            return;
        }

        nuevoDoc(doctor);;

        console.log("doctor modal", doctor);

        guardarDoctor({
            name: '',
            email: '',
            profesion: '',
            telefono: '',
            direccion: ''
        })

        handleModal(handleModalState)
    }
    return (

        <div className='nuevoturno-container'>

            <div className='nuevoturno-container__header'>
                <p className="text-white">Agregar Profesional</p>
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
                        <label>Profesión</label>
                        <input
                            type="text"
                            className="form-control"
                            name="profesion"
                            
                            placeholder="Escriba su constraseña "
                            onChange={onChange}
                        />
                    </div>
                    <div >
                        <label>Teléfono</label>
                        <input
                            type="number"
                            className="form-control"
                            name="telefono"
                            placeholder="Confirmar constraseña "
                            onChange={onChange}
                        />
                    </div>
                    <div >
                        <label>Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            name="direccion"
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
export default DoctorModal