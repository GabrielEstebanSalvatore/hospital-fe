import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/authentication/authContext';

const Navigation = () => {

    const authContext = useContext(AuthContext);
    const { clienteAutenticado, cliente, cerrarSesion } = authContext;

    useEffect(() => {

        clienteAutenticado();
        //eslint-disable-next-line
    }, [])

    return (

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
