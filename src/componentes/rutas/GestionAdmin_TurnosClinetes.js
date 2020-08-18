import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/BarraAdmin';
import DoctoresContext from '../../context/doctores/doctoresContext';
import ListadoTurnosClientes from '../routesGestionLayouts/ListadoTurnosClientes_Admin';
import ProyectoContext from '../../context/proyectos/proyectoContext'
import ModalContainer from '../../modal/ModalContainer';

const GestionDoctores_TurnosClinetes = () => {

    const proyectosContext = useContext(ProyectoContext);
    const {modalView } = proyectosContext;
    
    useEffect(() => {
        
        obtenerDoctores()    
      
    }, [])
    
    const doctoresContext= useContext(DoctoresContext)
    const {obtenerDoctores} = doctoresContext;

    return(

        <div className="gestionDoctores">
            {modalView  && <ModalContainer/>}
            <div >
            <BarraAdmin/>
            </div>
            <div className="gestion-principal__body">
                    <h2 >Listado de turnos de clientes</h2>
                    <ListadoTurnosClientes />
            </div>
        </div>

    )
}

export default GestionDoctores_TurnosClinetes;