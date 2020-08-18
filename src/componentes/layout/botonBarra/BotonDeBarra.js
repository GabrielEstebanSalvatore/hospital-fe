import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import ProyectoContext from '../../../context/projects/proyectoContext';

const DropButton = ({gestionAdmin,gestionCliente}) => {

    
    const proyectoContext = useContext(ProyectoContext);
    const {  handleModal} = proyectoContext;


    const [modalTurnos, setModalTurno] = useState('turnos');
    const [modalEmergencias, setModalEmergencia] = useState('emergencias');
    const [modalInternaciones, setModalInternacione] = useState('internaciones');
    const [modalPerfilCliente, setModalPerfil] = useState('clienteEditar');
    const [modalAgregarDoctor, setModalAgregarDoctor] = useState('nuevoDoctor');
    
    const showModalTurno = ()=>{handleModal(modalTurnos)}
    const showModalEmergencia = ()=>{handleModal(modalEmergencias)}
    const showModalInternacion = ()=>{handleModal(modalInternaciones)}
    const showModalPerfilCliente = ()=>{handleModal(modalPerfilCliente)}
    const showModalAgregarDoctor = ()=>{handleModal(modalAgregarDoctor) }
        //<button title='Nuevo turno' onClick={showModal}>Servicios</button>

    const menu = (
      
        <Menu>

          {gestionCliente &&
            <Menu.Item>
              <a target="_blank" href onClick={showModalTurno}>
                Turnos
              </a>
            </Menu.Item>}

          {gestionCliente &&
            <Menu.Item>
              <a target="_blank" href onClick={showModalEmergencia}>
                Emergencias
              </a>
            </Menu.Item>}

          {gestionCliente &&
            <Menu.Item>
              <a target="_blank"  href onClick={showModalInternacion}>
                Internaciones
              </a>
            </Menu.Item>}

          {gestionCliente &&
            <Menu.Item>
              <a target="_blank" href onClick={showModalPerfilCliente}>
                Editar Perfil
              </a>
            </Menu.Item>}

          {gestionAdmin &&
            <Menu.Item>
              <a target="_blank" href onClick={showModalAgregarDoctor}>
                Agregar Doctor
              </a>
            </Menu.Item>}

        </Menu>
      );

    return (
            
        <div className='botonMenu' >
        <Dropdown overlay={menu} placement="bottomRight">
            <Button>  ( &#43; ) Servicios</Button>
        </Dropdown>
           { /*<label htmlFor="btn-menu"><i class="fas fa-bars m-2"></i></label>
            <ul>
                <li className="submenu"><span>Servicios</span>
                    <ul >
                        <li><Link to="/turnos" className="text-white"><span>Turnos</span></Link></li>
                        <li><Link to="/emergencias" className="text-white"><span>Emergencias</span></Link></li>
                        <li><Link to="/internaciones" className="text-white"><span >Internaciones</span></Link></li>
                    </ul>
                </li>
                
            </ul>*/}
        </div>
    )
}

export default DropButton;