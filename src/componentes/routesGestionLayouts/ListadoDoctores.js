import React, {useContext, useEffect, useReducer, useState}from 'react';
import DoctoresContext from '../../context/doctores/doctoresContext';
import { Table } from 'antd';
import { DeleteOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2'

const ListadoDoctores = () => {

    //Extraer Turnos de state inicial
    const doctoresContext= useContext(DoctoresContext)
    const {obtenerDoctores,doctoresNombre,eliminarDoctor} = doctoresContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerDoctores()
      
        
    }, []);

    const columns = [
        {title: 'Doctor',dataIndex: 'name'},
        {title: 'Especialidad',dataIndex: 'profesion'},
        {title: 'Teleéfono',dataIndex: 'telefono'},
        {title: 'Correo',dataIndex: 'email'},
        {   title: 'Acciones',
            key: 'actions',
            render: (text, record) => (
                <div className="listado-turnos__Footer">
                    <i>
                    
                        <DeleteOutlined  onClick={() => onClickEliminar(record.key)} style={{color: 'red'}}/>
                    </i> 
                    <i>
                        <VerticalAlignBottomOutlined className="VerticalAlignBottomOutlined"  style={{color: 'green'}}/>
                    </i>
                </div>
            )
        }
    ];

    //ARMAR LA TABLA
   const getRow = () =>{
    return doctoresNombre.map((doctor)=>{
        return{
            key:doctor._id,
            name:doctor.name,
            profesion:doctor.profesion,
            email:doctor.email,
            telefono:doctor.telefono, 
        }
    })
   }
   const onClickEliminar =(id)=>{
    Swal.fire({
        title: '¿Estas seguro?',
        text: "!Si eliminas el profesional, sera dado de baja!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar'
      }).then((result) => {
        if (result.value) {
            eliminarDoctor(id)
            Swal.fire(
                'Eliminado!',
                'El porfesional se eliminó correctamente.',
                'success'
            )
        }
      })
    
  
    
   }
    return(
        
        <div className="tabla">
            <Table 
            columns={columns}
            dataSource={getRow()} 
            />
        </div> 
    )
}

export default ListadoDoctores