import React from 'react';
import {Link} from 'react-router-dom';

const Button = () => {
    return (
            
        <div className='botonMenu' >
            <input type="checkbox" id="btn-menu"/>
            <label htmlFor="btn-menu"><i class="fas fa-bars m-2"></i></label>
            <ul>
                <li className="submenu"><span>Servicios</span>
                    <ul >
                        <li><Link to="/turnos" className="text-white"><span>Turnos</span></Link></li>
                        <li><Link to="/emergencias" className="text-white"><span>Emergencias</span></Link></li>
                        <li><Link to="/internaciones" className="text-white"><span >Internaciones</span></Link></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    )
}

export default Button;