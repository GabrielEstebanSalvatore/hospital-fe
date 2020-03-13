import React, {useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import {Link} from 'react-router-dom'

const Barra = () => {

   const authContext = useContext(AuthContext);
   const { clienteAutenticado, cliente, cerrarSesion} = authContext;
   useEffect(() => {
       
   clienteAutenticado();
   }, [])

    return ( 
        /*<header className="app-header">
           <div className="row">
               <div className="col-9">
               {cliente ? <p className="nombre-usuario">Hola <span>{cliente.name} </span> </p> : null}
               </div>
               <div className="col-3">
                <nav className="text-">
                    <button 
                        className="btn btn-info "
                        onClick={() => cerrarSesion() }
                        >Cerrar Sesión
                    </button>
                </nav>
               </div>
           </div>
           
        </header>*/
        <div className="barranav">
            <nav className="navbar navbar-expand-lg navbar-primary bg-grey">
                <div className="container-fluid">
                    <div className="col-8">
                        {cliente ? <p className="nombre-usuario">Gestión de Turnos de: <span>{cliente.name} </span> </p> : null}
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-dark"></span>
                    </button>

                    <div className="collapse navbar-collapse col-4" id="navbarNav">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <Link to="/" className="btn btn-success mr-1">
                                    
                                           (+) Turnos
                                      
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="btn btn-info "
                                    onClick={() => cerrarSesion()}
                                >Cerrar Sesión
                                </Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    
     );
}
 
export default Barra;