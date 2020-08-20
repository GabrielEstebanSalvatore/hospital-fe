import React, { useContext} from 'react';
//import {Link} from 'react-router-dom';
import BarraDeGestion from '../layout/BarraDeGestion';
import ListadoTurnos from '../routesGestionLayouts/ListadoTurnos'
import ModalContainer from '../../modal/ModalContainer'
import ProyectContext from '../../context/projects/proyectContext';



const GestionClientes= () => {
    const proyectosContext = useContext(ProyectContext);
    const {modalView } = proyectosContext;
    
    return(
        
        <div className="gestionCliente">
        
            <div className="gestion-principal">
        {modalView  && <ModalContainer/>}
                <div >
                    <BarraDeGestion />
                </div>
                <div className="gestion-principal__body">
                    <h2 >Tus Turnos</h2>
                    <ListadoTurnos />
                </div>
            </div>
        </div>
    );
}

export default GestionClientes;