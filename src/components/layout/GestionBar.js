import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/authentication/authContext';
import BotonDeBarra from './buttonBar/BarButton'


const GestionBar = (props) => {

    const authContext = useContext(AuthContext);
    const { clienteAutenticado, client, /*cerrarSesion*/ } = authContext;


    useEffect(() => {
        clienteAutenticado();

        //eslint-disable-next-line
    }, [])

    return (
        <div className="barra_usuario">

            <div className="barra_usuario_nombre">
                {client ? <p className="nombre-usuario "><strong> Gestión de Turnos de: <span>{client.name} </span> </strong></p> : null}
            </div>

            <BotonDeBarra
                gestionCliente={true}
            />

        </div>

    );
}

export default GestionBar;