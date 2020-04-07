import React, {useContext, useEffect}from 'react';
import Turno from './Turno'
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoTurnos = () => {
    //Extraer Turnos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { turnos, obtenerTurnos,mensaje } = proyectosContext;

    // Obtener proyectos cuando carga el componente
    useEffect(() => {
        
        obtenerTurnos();
        // eslint-disable-next-line
    }, [mensaje]);

    if(turnos.length === 0 ) return <p>No hay turnos solicitados</p>;;
        
   
    
    return(
            <div>

                <ul className="listado-turnos">
                    {turnos.map(turno =>(
                        <Turno
                        key={turno._id}
                        turno={turno}
                        />
                        
                    ))} 
                    
                </ul>
    
                
            </div>
            
       
    )
}

export default ListadoTurnos