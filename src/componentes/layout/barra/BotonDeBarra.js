import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import ProyectoContext from '../../../context/proyectos/proyectoContext';

const DropButton = () => {

    
    const proyectoContext = useContext(ProyectoContext);
    const {  handleModal} = proyectoContext;


    const [modalTurnos, setModalTurno] = useState('turnos');
    const [modalEmergencias, setModalEmergencia] = useState('emergencias');
    const [modalInternaciones, setModalInternacione] = useState('internaciones');

       const showModalTurno = ()=>{handleModal(modalTurnos)}
       const showModalEmergencia = ()=>{handleModal(modalEmergencias)}
       const showModalInternacion = ()=>{handleModal(modalInternaciones)}
        //<button title='Nuevo turno' onClick={showModal}>Servicios</button>

    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" onClick={showModalTurno}>
              Turnos
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" onClick={showModalEmergencia}>
              Emergencias
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" onClick={showModalInternacion}>
              Internaciones
            </a>
          </Menu.Item>
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