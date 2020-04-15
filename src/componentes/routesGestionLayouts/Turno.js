import React,{useContext,useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import clienteAxios from '../../config/axios';
import { saveAs } from 'file-saver';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'

const Turno = ({turno}) => {

    // State para Emergencia
    const [ticket] = useState({
        name:turno.name,
        tipoTurno:turno.tipoTurno,
        doctor:turno.doctor,
        fecha:turno.fecha,
        receiptId: turno._id
    });
    //console.log('desde turnos',turno);
    
    // Extraer nombre de emergencia
    //const { name } = turno.name;
    const history = useHistory()
    const proyectosContext = useContext(proyectoContext);
    const { eliminarTurno, editarTurno} = proyectosContext;
    
    //Elimina un turno
    const onClickEliminar = () => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "!Si eliminas el turno, no lo podras recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.value) {
                eliminarTurno(turno._id)
                Swal.fire(
                    'Eliminado!',
                    'El turno se eliminó correctamente.',
                    'success'
                )
            }
          })
        
    }
    //Editar turno
    const redireccionarEdicion = ()=>{
        console.log(turno);
        
        editarTurno(turno)
        history.push(`/turno/${turno._id}`)
    }

    // Crear pdf del turno
    const createAndDownloadPdf = async () => {
       
        await clienteAxios.post('/create-pdf', ticket)
          .then(() => clienteAxios.get('fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            saveAs(pdfBlob, 'newPdf.pdf');
          })
      }

    return(
        
        <li className="tarea">
            <hr/>
            <div className="row ">
                <div className="col" id="accion">
                    <p>Clase: {turno.tipoTurno  } </p>
                    <p>Doctor: {turno.doctor  } </p>
                    <p>Paciente: {turno.name } </p>
                    <p>Fecha: {turno.fecha}</p>
                </div>
                <div className="col acciones ">
                    <div className="acciones" id="acacciones">
                        
                        <button 
                            type="button"
                            className="btn btn-info m-2"
                            onClick={redireccionarEdicion}
                        >Editar</button>

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={createAndDownloadPdf}
                        >Descargar</button>

                        <button
                            type="button"
                            className="btn btn-danger m-2"
                            onClick={onClickEliminar}
                            
                        >Eliminar</button>

                    </div>
                </div>
    
            </div>
        </li>
    )
}

export default Turno;

