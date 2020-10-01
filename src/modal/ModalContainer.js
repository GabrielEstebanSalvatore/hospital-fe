import React,{useContext} from 'react';
import TurnosModal from './turnsModal';
import ClientModal from './clientModal';
import DoctorModal from './doctorModal';
import proyectContext from '../context/projects/proyectContext';
import AuthContext from '../context/authentication/authContext';

const ModalContainer = ()=>{
    
    const proyectosContext = useContext(proyectContext);
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
                return <ClientModal
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