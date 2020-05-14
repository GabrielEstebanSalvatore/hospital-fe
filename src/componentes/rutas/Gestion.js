import React, { /*useContext, useEffect */} from 'react';
//import {Link} from 'react-router-dom';
import BarraDeGestion from '../layout/BarraDeGestion';
import ListadoTurnos from '../routesGestionLayouts/ListadoTurnos'
 
const GestionUsuario= () => {
    
    return(

        <div className="gestion">
            <div className="gestion-principal">
                <div className="">
                    <BarraDeGestion />
                </div>
                {/*<div className="col-3 ">
                            <   Sidebar/>
                            </div>*/}
                <div className="m-4">
                    <h2 className="pt-2 pb-4">Tus Turnos</h2>
                    <ListadoTurnos />
                </div>
            </div>
        </div>
    );
}

export default GestionUsuario;