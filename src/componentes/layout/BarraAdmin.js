import React, {useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import {Link} from 'react-router-dom'


const BarraAdmin = () => {


   
    const authContext = useContext(AuthContext);
    const { cliente} = authContext;
 
    return ( 
        <div className="barranav">
            <nav className="navbar navbar-expand-lg navbar-primary bg-grey">
                <div className="container-fluid">
                    <div className="col-8">
                        {cliente ? <p className="nombre-usuario">Gestión de Turnos de: <span>{cliente.name} </span> </p> : null}
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ( &#43; )  Turnos
                        </button>
                        <div className="dropdown-menu" >

                    

                            <button className="dropdown-item" type="button"><Link to="/turnos" className="text-dark"><span className="span">Turnos</span></Link></button>
                            <button className="dropdown-item" type="button"><Link to="/emergencias" className="text-dark"><span className="span">Emergencias</span></Link></button>
                            <button className="dropdown-item" type="button"><Link to="/internaciones" className="text-dark"><span className="span">Internaciones</span></Link></button>
                        </div>
                    </div>

                   
                </div>
            </nav>
        </div>
        )
    }
    export default BarraAdmin;