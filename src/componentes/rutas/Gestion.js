import React, { /*useContext, useEffect */} from 'react';
//import {Link} from 'react-router-dom';

import Sidebar from '../routesGestionLayouts/Sidebar';
import Barra from '../layout/Barra';

import ListadoTurnos from '../routesGestionLayouts/ListadoTurnos'
 
const GestionUsuario= () => {
    
    return(

        <div className="container-gestion">
            <div className="row">
                <div className="gestion-col col-3">
                <Sidebar/>
                </div>
                <div className="col-9">
                    <div className="seccion-principal">
                        <div className="row-nombre">
                            <Barra/>
                        </div>
                        <main>
                            
                            <div className="contenedor-tareas">
                                <h3 className="pt-4">Tus Turnos</h3>
                                <ListadoTurnos/>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
        /*<div className="contenedor-app">
            <Sidebar className/>

            <div className="seccion-principal">
                
                <main>
                    
                    <div className="contenedor-tareas">
                        
                    </div>
                </main>
            </div>
        </div>*/
        
        
        /*<div className="container">

            <div className="row">
                <div className="col-md-12 mb-4 pt-4">
                    <Link to="/" className="btn btn-primary mt-4">
                        <i className="fas fa-arrow-circle-left"></i> {''}
                        Volver al Listado
                    </Link>
                </div>
                <div className="col-md-8">
                    <h2>
                        <i className="fas fa-briefcase"> </i> Mi gestión
                    </h2>
                </div>
                <table className="table table-striped mt-4">
                    <thead className="text-light bg-primary">
                        <tr>
                            <th>Nombre</th>
                            <th>Carrera</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>*/
    );
    
}

export default GestionUsuario;