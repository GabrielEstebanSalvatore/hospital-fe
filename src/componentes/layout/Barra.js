import React, {useContext,useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

   const authContext = useContext(AuthContext);
   const { clienteAutenticado, cliente, cerrarSesion} = authContext;
   useEffect(() => {
       
   clienteAutenticado();
   }, [])

    return ( 
        <header className="app-header">
           {cliente ? <p className="nombre-usuario">Hola <span>{cliente.name} </span> </p> : null}
           
            <nav className="nav-principal just ">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesion() }
                    >Cerrar Sesión
                </button>
            </nav>
        </header>
     );
}
 
export default Barra;