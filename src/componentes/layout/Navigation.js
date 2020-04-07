import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/authContext';

const Navigation = () => {

    const authContext = useContext(AuthContext);
    const { clienteAutenticado,cliente, cerrarSesion } = authContext;
    useEffect(() => {

        clienteAutenticado();
        //eslint-disable-next-line
    }, [])
    return (

       


        <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
            <div className="container">
                {cliente
                    ?
                    <Link className="navbar-brand text-white" to="/">
                        Home
                    </Link>
                    :
                        <Link className="navbar-brand text-white" to="/">
                            Hospital - React
                    </Link>
                }

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    {cliente 
                        ?
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <Link className="navbar-brand text-white" to="/gestion">Mi Gestion</Link>
                            </li>
                            <li
                                className="btn btn-info "
                                onClick={() => cerrarSesion()}
                                >Cerrar Sesión
                            </li>
                        </ul>
                        :  
                        <ul className="navbar-nav ml-auto" >
                            <li className="nav-item">
                                <Link className="navbar-brand text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="navbar-brand text-white" to="/user/signin">Ingresar</Link>
                            </li>
                        </ul>    
                    }
                    
                </div>

            </div>
        </nav>



        /*<nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    Hospital - React
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand text-white" to="/user/signin">Ingresar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>*/
    )
}
export default Navigation;