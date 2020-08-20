import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/BarraAdmin';
import DoctoresContext from '../../context/doctors/doctoresContext';
import ListadoTurnosClientes_Doctor from '../routesGestionLayouts/ListadoTurnosClientes_Doctor';
import ProyectContext from '../../context/projects/proyectContext'
import ModalContainer from '../../modal/ModalContainer';

const GestionDoctores = () => {

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
                    <h2 >Listado de Doctores</h2>
                    <ListadoTurnosClientes_Doctor />
            </div>
        </div>

    )
}

export default GestionDoctores;