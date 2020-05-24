import React, {useContext, useEffect, useReducer, useState}from 'react';
import Turno from './Turno'
import clienteAxios from '../../config/axios';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { saveAs } from 'file-saver';
import { Table } from 'antd';
import { DeleteOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'

const ListadoTurnos = () => {

    //Extraer Turnos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { turnos, obtenerTurnos,eliminarTurno, editarTurno } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerTurnos(); 
    }, []);
   
    /*const [turno,setTurno] = useState({
        name: '',
        tipoTurno: "",
        doctor:"",
        fecha:"",
        receiptId:"",
    });*/
    if(turnos.length === 0 ) return <p>No hay turnos solicitados</p>;;

    /*const prepare = (record) =>{
        console.log(record);
        setTurno({
            ...turno,
            name: record.name,
            tipoTurno: record.name,
            doctor: record.doctor,
            fecha: record.fecha,
            receiptId: record.key,
        })

        
    }*/
    const columns = [
        {title: 'Cliente',dataIndex: 'name'},
        {title: 'Doctor',dataIndex: 'doctor'},
        {title: 'Tipo Turno',dataIndex: 'tipoTurno'},
        {title: 'Fecha',dataIndex: 'fecha'},
        {   title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <div className="listado-turnos__Footer">
                    <i>
                    
                        <DeleteOutlined onClick={() => onClickEliminar(record.key)} style={{color: 'red'}}/>
                    </i> 
                    <i>
                        <VerticalAlignBottomOutlined className="VerticalAlignBottomOutlined" onClick={ () =>createAndDownloadPdf(record)} style={{color: 'green'}}/>
                    </i>
                </div>
            )
        }
    ];
      
    //PDF
    const createAndDownloadPdf = async (turno) => {
        await clienteAxios.post('/create-pdf', turno)
        .then(() => clienteAxios.get('fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                saveAs(pdfBlob, 'newPdf.pdf');
        })
    }

    //ARMAR LA TABLA
   const getRow = () =>{
    return turnos.map((turno)=>{
        return{
            key:turno._id,
            name:turno.name,
            doctor:turno.doctor,
            tipoTurno:turno.tipoTurno,
            fecha:turno.fecha
        }
    })
   }
   
  
    //ELIMAR TURNO
    const onClickEliminar = (id) => {
        console.log(id);
        
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
                eliminarTurno(id)
                Swal.fire(
                    'Eliminado!',
                    'El turno se eliminó correctamente.',
                    'success'
                )
            }
          })
        
    }
    
    return(

        
        <div className="tabla">
        {/*turno.name != '' ? createAndDownloadPdf() : null*/}

            <Table 
            columns={columns}
            dataSource={getRow()} 
            />
            
        </div>
       
        /*<div className="listado-turnos">
            <div className="listado-turnos__Header">
                <div>Categoría</div>
                <div>Proveedor</div>
                <div>Cantidad</div>
                <div>Cuenta</div>
                <div className="titulo5"><div>Opciones</div></div>
            </div>
            <ul className="listado-turnos">
                {turnos.map(turno => (
                    <Turno
                        key={turno._id}
                        turno={turno}
                    />

                ))}

            </ul>


        </div>*/

       
    )
}

export default ListadoTurnos