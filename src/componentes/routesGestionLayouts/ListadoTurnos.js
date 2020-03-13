import React, {useContext, useEffect}from 'react';
import Turno from './Turno'
import proyectoContext from '../../context/proyectos/proyectoContext';
import genPDF from '../layout/Pdf'

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
        
    const PDF = genPDF()
    
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
    
                <a href="javascript:PDF">Download PDF</a>
            </div>
            
       
    )
}

export default ListadoTurnos