import React, { useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/authentication/authContext';

const Navigation = () => {
    
    const authContext = useContext(AuthContext);
    const { clienteAutenticado,cliente, cerrarSesion } = authContext;
    
    useEffect(() => {
        
        clienteAutenticado();
        //eslint-disable-next-line
    }, [])

    

  
    return (

     /*

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
                    <span className="btn btn-light"  ><h5><strong> &laquo;</strong></h5></span>
                    
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

*/




/*{cliente.role == 'USER_ROLE' && <p>USER</p>}
{cliente.role == 'ADMIN_ROLE' && <p>ADMIN</p>}*/
        
        <nav className="navigation">

            <div className="navbar1 ">
                
                {cliente
                    ?
                    <Link className="nav-item text-white" to="/">
                        
                    <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg " alt="" />
                        Home 
                
                    </Link>
                    :
                    <Link className="nav-item text-white" to="/">
                        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg " alt="" />

                        Hospital 
                    </Link>
                    
                }
            </div>
            <div className="navbar2">
                
                {cliente
                    ?

                    <ul className="navbar2-1" >
                        {cliente.role == 'ADMIN_ROLE' &&
                            <li>
                                <Link className=" text-white" to="/gestionadmin">Doctores</Link>
                            </li>
                        }
                        {cliente.role == 'ADMIN_ROLE' &&
                            <li>
                                <Link className=" text-white" to="/gestionadminturnos">Turnos</Link>
                            </li>
                        }
                        {cliente.role == 'USER_ROLE' &&
                            <li className="nav-item ">
                                <Link className=" text-white" to="/gestion">Mi Gestion</Link>

                            </li>
                        }
                        {cliente.role == 'DOCTOR_ROLE' &&
                            <li className="nav-item ">
                                <Link className=" text-white" to="/gestiondoctores">Administrar Turnos</Link>

                            </li>
                        }
                        <li className="nav-item "

                            onClick={() => cerrarSesion()}
                        >Cerrar Sesión
                    </li>
                    </ul>

                    :


                    <ul className=" navbar2-2 " >
                        <li className="nav-item">
                            <Link className=" text-white" to="/user/signin">Ingresar</Link>
                        </li>
                    </ul>

                }

            </div>


        </nav>





)
}
export default Navigation;
/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="btn btn-light"  ><h5><strong> &laquo;</strong></h5></span>
         
</button>*/