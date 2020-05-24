import React,{useContext} from 'react'
import TurnosModal from './tunosModal'
import proyectoContext from '../context/proyectos/proyectoContext';


const ModalContainer = ()=>{
    
    const proyectosContext = useContext(proyectoContext);
    const {modalView } = proyectosContext;

    const renderModalView =()=>{
        switch (modalView) {
            case 'turnos':
                return <TurnosModal
                        typeTurnos={true}
                        />
            case 'emergencias':
                return <TurnosModal
                        typoEmergencias={true}
                        
                        />
            case 'internaciones':
                return <TurnosModal
                        typoInternaciones={true}
                       
                        />
                default:
                    return null
                    
                    
                }
            }
            
    return(
        <div className="modal-Container">
            <div className="modal-container__header"></div>
            <div className="modal-container__body">
                
                {renderModalView()}
            </div>

        </div>
    )
}

export default ModalContainer