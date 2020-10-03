import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/AdminBar';
import DoctoresContext from '../../context/doctors/doctorsContext';
import ListadoTurnosClientes from '../routesGestionLayouts/ClientsTurnsList_Admin';
import ProyectContext from '../../context/projects/proyectContext'
import ModalContainer from '../../modal/modalContainer';

const GestionAdmin_ClientTurns = () => {

    const proyectosContext = useContext(ProyectContext);
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

export default GestionAdmin_ClientTurns;