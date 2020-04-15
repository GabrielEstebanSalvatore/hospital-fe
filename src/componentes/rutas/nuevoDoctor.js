import React, {useState,useContext} from 'react'
import doctoresContext from '../../context/doctores/doctoresContext';

const NuevoDoctor = () => {
    
    const doctorContext = useContext(doctoresContext)
    const {nuevoDoc} = doctorContext;

    const [doctor, guardarDoctor] = useState({
        name: '',
        profesion: '',
        email:'',
        telefono: '',
        direccion:'',
        img:''
    });

    // extraer de usuario
    const { name, email, profesion, telefono, direccion, img} = doctor;

    const onChange = e =>{
        guardarDoctor({
            ...doctor,
            [e.target.name] : e.target.value
        })
    };

    const onSubmitNewDoc = e => {
        
        e.preventDefault();

        // agregar al state
        nuevoDoc(doctor)
        console.log(doctor);
        
        // Reiniciar el form
        guardarDoctor({
            name: '',
            profession: '',
            email:'',
            telefono: '',
            direccion:'',
            img:''
        })
        
    }

    return(

            <div className="container">
                <div className="row">
                    <div className="col-12 mb-4">
                       
                    </div>
                    <div className="col-12">
                        <h2>
                            <i className="fas fa-notes-medical "> </i> {''}
                            Gestion de profesionales
                        </h2>

                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-5">
                                <form
                                    onSubmit={onSubmitNewDoc}
                                    noValidate
                                >
                                    <div className="form-group">
                                        <label>Nombre:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Escriba su nombre"
                                            required
                                            value={name}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Especialidad:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="profesion"
                                            placeholder="Escriba su nombre"
                                            required
                                            value={profesion}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="email"
                                            placeholder="Escriba su nombre"
                                            required
                                            value={email}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Teléfono:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="telefono"
                                            placeholder="Escriba su nombre"
                                            
                                            value={telefono}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>dirección:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="direccion"
                                            placeholder="Escriba su nombre"
                                            
                                            value={direccion}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Foto:</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="img"
                                            placeholder="Escriba su nombre"
                                            value={img}
                                            onChange={onChange}
                                        />
                                    </div>
                                                                
                                    <button className="btn btn-success btn-block mb-4">
                                        Aceptar
                                    </button>
                                                           
                                </form>
                               
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </div>
     
    );
}

export default NuevoDoctor;