import React,{useState} from 'react';
import { Rate } from 'antd';


//FIDO
const ContadorRate = () => {

   
    
    const handleChange = (value) => {
        setRate({ value });
      };

    const desc = ['Terrible', 'Malo', 'Normal', 'Bueno', 'Excelente'];
    const [rate, setRate] = useState({
        value: 3
    }); 
    const { value } = rate;
    
    return (
       
      
        <div className="section-3">
                        <div className="section-3_header">
                            <h1 className="text-center m-2 text-white">¿Por qué elegirnos?</h1>
                        </div>

                        <div className="boton">
                            <div>
                                <div className="bot1 ">
                                <i class="far fa-smile-beam fa-3x"></i>
                                </div>
                                <p>Usuarios satisfechos</p>
                                <span>
                                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                                    {value 
                                    ? <span className="ant-rate-text">{desc[value - 1]}</span> 
                                    : ''}
                                </span>
                            </div>
                            <div>
                                <div className="bot2 ">
                                <i class="fas fa-running fa-3x"></i>
                                </div>
                                <p>Velocidad de atención</p>
                                <span>
                                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                                    {value 
                                    ? <span className="ant-rate-text">{desc[value - 1]}</span> 
                                    : ''}
                                </span>
                            </div>
                            <div>
                                <div className="bot3 ">
                                <i class="fas fa-users fa-3x"></i>
                                </div>
                                <p>Personal capacitado</p>
                                <span>
                                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                                    {value 
                                    ? <span className="ant-rate-text">{desc[value - 1]}</span> 
                                    : ''}
                                </span>
                            </div>
                            <div>
                                <div className="bot4 ">
                                <i class="fas fa-child fa-3x"></i>
                                </div>
                                <p>Atención amplia</p>
                                <span>
                                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                                    {value 
                                    ? <span className="ant-rate-text">{desc[value - 1]}</span> 
                                    : ''}
                                </span>
                            </div>
                            <div>
                                <div className="bot5 ">
                                <i class="fas fa-laptop-medical fa-3x"></i>
                                </div>
                                <p>Facilidad de gestión</p>
                                <span>
                                    <Rate tooltips={desc} onChange={handleChange} value={value} />
                                    {value 
                                    ? <span className="ant-rate-text">{desc[value - 1]}</span> 
                                    : ''}
                                </span>
                            </div>
                        </div>


                    </div>
    )


}
export default ContadorRate;