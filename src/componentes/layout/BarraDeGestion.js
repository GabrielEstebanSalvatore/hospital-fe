import React, {useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import {Link} from 'react-router-dom'
import BotonDeBarra from './barra/BotonDeBarra'

const BarraDeGestion = () => {

   const authContext = useContext(AuthContext);
   const { clienteAutenticado, cliente, /*cerrarSesion*/} = authContext;

   useEffect(() => {
       
   clienteAutenticado();
   //eslint-disable-next-line
   }, [])

    return ( 
        <div className="barra_usuario">
            
                    <div className="barra_usuario_nombre">
                        {cliente ? <p className="nombre-usuario "><strong> Gestión de Turnos de: <span>{cliente.name} </span> </strong></p> : null}
                    </div>

                        <BotonDeBarra/>
                    {/*<div className="barra_usuario_boton dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ( &#43; )  Turnos
                        </button>
                    </div>

                        <div className="dropdown-menu primary"  >
                            <button className="dropdown-item" type="button"><Link to="/turnos" className="text-dark"><span className="span">Turnos</span></Link></button>
                            <button className="dropdown-item" type="button"><Link to="/emergencias" className="text-dark"><span className="span">Emergencias</span></Link></button>
                            <button className="dropdown-item" type="button"><Link to="/internaciones" className="text-dark"><span className="span">Internaciones</span></Link></button>
                        </div>*/}
                   
                
        </div>

        /*
        <div className="barranav">
            <nav className="navbar navbar-expand-lg navbar-primary bg-grey">
                <div className="container-fluid">
                    <div className="col-8">
                        {cliente ? <p className="nombre-usuario">Gestión de Turnos de: <span>{cliente.name} </span> </p> : null}
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="btn btn-primary "  type="button"><h5><strong> &laquo;</strong></h5></span>
                    </button>

                    <div className="collapse navbar-collapse col-4" id="navbarNav">
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <Link to="/" className="btn btn-success ">
                                    
                                           ( &#43; )  Turnos
                                      
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        */
    
     );
}
 
export default BarraDeGestion;