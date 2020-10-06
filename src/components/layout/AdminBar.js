import React, {useContext} from 'react';
import AuthContext from '../../context/authentication/authContext';
import BotonDeBarra from './buttonBar/BarButton'

const BarraAdmin = () => {
    const authContext = useContext(AuthContext);
    const { client } = authContext;

    return (
        <div className="barra_usuario">
            <div className="barra_usuario_nombre">
                {client ? <p className="nombre-usuario "><strong> Gestión de: <span>{client.name} </span> </strong></p> : null}
            </div>

            <BotonDeBarra 
            gestionAdmin={true}
            />
        </div>
    )
}
export default BarraAdmin;