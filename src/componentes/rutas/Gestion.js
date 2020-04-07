import React, { /*useContext, useEffect */} from 'react';
//import {Link} from 'react-router-dom';
import Barra from '../layout/Barra';
import ListadoTurnos from '../routesGestionLayouts/ListadoTurnos'
 
const GestionUsuario= () => {
    
    return(

        <div className="gestion">
            <div className="row">
                <div className="col-12">
                    <div className="seccion-principal">
                        <div className="row-nombre">
                            <Barra/>
                        </div>
                        <div className="row">
                            {/*<div className="col-3 ">
                            <   Sidebar/>
                            </div>*/}
                            <div className="col-12 m-4">
                                <h2 className="pt-2 pb-4">Tus Turnos</h2>
                                    <ListadoTurnos/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GestionUsuario;