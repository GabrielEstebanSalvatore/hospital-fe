import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/AdminBar';
import DoctoresContext from '../../context/doctors/doctorsContext';
import DoctorsList from '../routesGestionLayouts/DoctorsList';
import ProyectContext from '../../context/projects/proyectContext'
import ModalContainer from '../../modal/modalContainer';

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
                    <DoctorsList />
            </div>
        </div>

    )
}

export default GestionDoctores;