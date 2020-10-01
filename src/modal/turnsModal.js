import React, { useContext, useState, useEffect } from 'react';
import ProyectContext from '../context/projects/proyectContext';
import DoctoresContext from '../context/doctors/doctorsContext';

//import Input from './input/index'


const TurnosModal = ({ typeTurnos,typoInternaciones,typoEmergencias }) => {

    const proyectContext = useContext(ProyectContext);
    const { handleModal, agregarTurno } = proyectContext;
    const doctoresContext = useContext(DoctoresContext)
    const { obtenerDoctores, doctoresNombre } = doctoresContext;

    useEffect(() => {
        obtenerDoctores()
        {typoInternaciones && guardarTurno({...turno, tipoTurno:'INTERNACION' })}
        {typoEmergencias && guardarTurno({...turno, tipoTurno: 'EMERGENCIA' })}
        {typeTurnos && guardarTurno({...turno, doctor: '',tipoTurno: 'TURNO' })}
        // eslint-disable-next-line
    }, [typoInternaciones,typoEmergencias,typeTurnos])

    const [handleModalState, setHandleModalState] = useState(
        '',
        //showModal: false,
    );
    const [turno, guardarTurno] = useState({
        //fecha: new Date(),
        hora: '',
        fecha: '',
        name: '',
        tipoTurno:'',
        doctorEmail: '',
        
    });
   
    const showModal = () => {

        handleModal(handleModalState)
    }

    const onChange = e => {
        
        guardarTurno({
            ...turno,
            [e.target.name]: e.target.value
        })
    }
    const onChangeDoc = e => {
        guardarTurno({
            ...turno,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitTurno = e => {
        e.preventDefault();
        // Validar el turno
        if (turno.name === '') {
            console.log("MODAL Falta el nombre", turno.name);
            return;
        }
        agregarTurno(turno)

        console.log("MODAL", turno);

        guardarTurno({
            name: '',
            hora: '',
            doctorEmail: '',
            fecha: '',
            tipoTurno:''

        })

        handleModal(handleModalState)
    }
    return (

        <div className='nuevoturno-container'>

            <div className='nuevoturno-container__header'>
                <p className="text-white">Solicitud de Turnos</p>
            </div>
            <div className='nuevoturno-container__body'>

                <div >
                    <label>Paciente</label>
                    <input
                        onChange={onChangeDoc}
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Escriba su nombre" />
                </div>
                {typeTurnos &&
                    <div >
                        <label>Doctor</label>
                        <select
                            className="form-control"
                            //value={turno.name}
                            onChange={onChange}
                           
                            name="doctorEmail"

                            required>
                            <option value="" disabled selected >Seleccione el doctor</option>
                            {
                                doctoresNombre.map(doctor => (
                                    <option key={doctor._id} value={doctor.email}>
                                        {doctor.name} - {doctor.profesion}
                                    </option>
                                ))
                            }         
                        </select>
                    </div>
                }
                {typoEmergencias &&
                    <div >
                        <label>Tipo de Turno</label>
                        <input
                            type="text"
                            className="form-control"
                            name="doctor"
                            placeholder="EMERGENCIA"
                            value='EMERGENCIA'
                            readOnly
                        />
                    </div>
                }
                {typoInternaciones &&
                    <div >
                        <label>Tipo de Turno</label>
                        <input
                            type="text"
                            className="form-control"
                            name="tipoTurno"
                            value='INTERNACIONES'
                            readOnly
                        />
                    </div>
                }
                <label>Fecha</label>
                <div className="">
                    <input
                        type="date"
                        className="form-control"
                        name="fecha"
                        onChange={onChange}

                    />
                </div>

                <label>Hora</label>
                <div className="">
                    <input
                        type="time"
                        className="form-control"
                        name="hora"
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
export default TurnosModal