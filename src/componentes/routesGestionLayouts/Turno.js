import React,{useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



const Turno = ({turno}) => {

    const proyectosContext = useContext(proyectoContext);
    const { eliminarTurno} = proyectosContext;
    
    //Elimina un turno
    console.log('turno: especial ',turno);
    
    const onClickEliminar = () => {
        eliminarTurno(turno._id)
    }
    return(
        <li className="tarea">
            <hr/>
            <div className="row ">
                <div className="col">
                    <p>Clase: {turno.tipoTurno  } </p>
                    <p>Doctor: {turno.doctor  } </p>
                    <p>Paciente: {turno.name } </p>
                    <p>Fecha: {turno.fecha}</p>
                </div>
                <div className="col">
                    <div className="acciones">
                        
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
                </div>

                
            </div>
            <hr/>
            

           

            
        </li>
    )
}

export default Turno;

