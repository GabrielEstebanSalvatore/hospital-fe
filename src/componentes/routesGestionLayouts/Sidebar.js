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

        <aside >
            <h2 className="text-center">Gestión <span> Turnos</span></h2>
                <Link to="/" className="btn btn-white mt-4">
                    <h2>
                        <i className="fas fa-user-md fa-lg"></i>  {''}
                        <button className="btn btn-primary px-5 py-2">
                            Turnos
                        </button>
                    </h2>
                </Link>
            <div className="">
                               
            </div>
        </aside>
    );
}

export default Sidebar;