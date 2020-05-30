import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/BarraAdmin';
import DoctoresContext from '../../context/doctores/doctoresContext';
import ListadoDoctores from '../routesGestionLayouts/ListadoDoctores';
import ProyectoContext from '../../context/proyectos/proyectoContext'
import ModalContainer from '../../modal/ModalContainer';

const GestionDoctores = () => {

    const proyectosContext = useContext(ProyectoContext);
    const {modalView } = proyectosContext;
    
    useEffect(() => {
        
        obtenerDoctores()    
      
    }, [])
    
    const doctoresContext= useContext(DoctoresContext)
    const {obtenerDoctores,doctoresNombre} = doctoresContext;

    return(

        <div className="gestionDoctores">
            {modalView  && <ModalContainer/>}
            <div >
            <BarraAdmin/>
            </div>
            <div className="gestion-principal__body">
                    <h2 >Listado de Doctores</h2>
                    <ListadoDoctores />
            </div>
        </div>

    )
}

export default GestionDoctores;