import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const Turno = ({turno}) => {

    const proyectosContext = useContext(proyectoContext);
    const { eliminarTurno} = proyectosContext;
    
    //Elimina un turno

    const onClickEliminar = () => {
        eliminarTurno(turno.id)
    }
    return(
        <li className="tarea sombra">
            <p>{turno.nombre} </p>

            <div className="estado">
                {turno.estado 
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                            
                        >Completo</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                            
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <p>Fecha: {}</p>
                <button 
                    type="button"
                    className="btn btn-success m-2"
                    
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={onClickEliminar}
                    
                >Eliminar</button>
            </div>
        </li>
    )
}

export default Turno;


/*
<li>
            <p>{turno.nombre}</p>
                <button
                    type="button"
                    className="btn btn-blank"
                >{turno.nombre}
            </button>
        </li>
        */