import React, {useContext} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import BotonDeBarra from './botonBarra/BotonDeBarra'

const BarraAdmin = () => {



    const authContext = useContext(AuthContext);
    const { cliente } = authContext;

    return (
        <div className="barra_usuario">


            <div className="barra_usuario_nombre">
                {cliente ? <p className="nombre-usuario "><strong> Gestión de: <span>{cliente.name} </span> </strong></p> : null}
            </div>

            <BotonDeBarra 
            gestionAdmin={true}
            />



        </div>
    )
}
export default BarraAdmin;