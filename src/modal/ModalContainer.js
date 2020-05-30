import React,{useContext} from 'react';
import TurnosModal from './tunosModal';
import ClienteModal from './clienteModal';
import DoctorModal from './doctorModal';
import proyectoContext from '../context/proyectos/proyectoContext';
import AuthContext from '../context/autenticacion/authContext';

const ModalContainer = ()=>{
    
    const proyectosContext = useContext(proyectoContext);
    const {modalView } = proyectosContext;
    const authContext = useContext(AuthContext);
    const { cliente } = authContext;

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
            case 'clienteEditar':
                return <ClienteModal
                    clienteId={cliente._id}
                />
            case 'nuevoDoctor':
                return <DoctorModal
                    agregarDoctor={true}
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