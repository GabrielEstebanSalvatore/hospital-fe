import React, { useContext, useEffect } from 'react';
import BarraAdmin from '../layout/BarraAdmin';
import DoctoresContext from '../../context/doctores/doctoresContext';

const GestionDoctores = () => {
    useEffect(() => {
        
        obtenerDoctores()    
      
    }, [])
    

    const doctoresContext= useContext(DoctoresContext)
    const {obtenerDoctores,doctoresNombre} = doctoresContext;
    return(

        <div className="gestion">
            <div className="row">
                <div className="col-12">
                    <div className="row-nombre">
                    <BarraAdmin/>
                    </div>
                    <div className="row-nombre">
                    {
                                            doctoresNombre.map(doctor => (
                                                <option key={doctor._id} value={doctor}>
                                                    {doctor.name} - {doctor.profesion}
                                                </option>
                                            ))
                                        }
                    </div>


                </div>
            </div>
        </div>

    )
}

export default GestionDoctores;