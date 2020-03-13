import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const Sidebar= () => {

   // Extraer la información de autenticación
   const authContext = useContext(AuthContext);
   const { clienteAutenticado } = authContext;

   useEffect(() => {
       //console.log(clienteAutenticado.token);
       
    clienteAutenticado();
   }, [])
    return(

        <aside className="aside">
            <h2 className="text-center pt-4 "><span className="m-1">Gestión de  Turnos</span></h2>
            <Link to="/" className="btn btn-white m-4">
                <h2>
                    <i className="fas fa-user-md fa-lg"></i>  {''}
                    <button className="btn btn-primary px-5 py-2">
                        Turnos
                    </button>
                </h2>
            </Link>

        </aside>
    );
}

export default Sidebar;