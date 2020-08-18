import React, {useContext, useEffect } from 'react';

import AuthContext from '../../../../context/autenticacion/authContext';
import ProyectoContext from '../../../../context/projects/proyectoContext'

//FIDO
const ContadorClientes = () => {

    const authContext = useContext(AuthContext);
    const { cantidadDeClinetes,numeroClientes} = authContext;
    const proyectosContext = useContext(ProyectoContext);
    const {numeroTurnos,cantidadDeTurnos } = proyectosContext;

    useEffect(()=>{
        cantidadDeClinetes()
        cantidadDeTurnos()
    },[numeroClientes,numeroTurnos])
    
    return (
        <section className="section-2 ">

            <div className="cantidad_clientes">
                <h3>CANTIDAD DE CLIENTES</h3>
                <h4>
                    {numeroClientes} 
                </h4>
            </div>
            <div className="cantidad_turnos">
                <h3>CANTIDAD DE TURNOS</h3>
                <h4>
                    {numeroTurnos} 
                </h4>
            </div>

        </section>
    )


}
export default ContadorClientes;