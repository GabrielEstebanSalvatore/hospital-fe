import React, {useContext,useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';
import BotonDeBarra from './buttonBar/BarButton'


const GestionBar = (props) => {

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

                        <BotonDeBarra 
                        gestionCliente={true}
                        />
                       
                       { /*<button title='Nuevo turno' onClick={showModal}>Servicios</button>*/}
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

     );
}
 
export default GestionBar;