import React, {useContext, useEffect}from 'react';
import Turno from './Turno'
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTurnos = () => {
    //Extraer Turnos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { turnos, obtenerTurnos } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        
        obtenerTurnos();
        // eslint-disable-next-line
    }, []);

    if(turnos.length === 0 ) return null;
        
    
    return(
        
            <ul className="listado-turnos">
                {turnos.map(turno =>(
                    <Turno
                    key={turno.id}
                    turno={turno}
                    />
                ))} 
            </ul>
            
       
    )
}

export default ListadoTurnos