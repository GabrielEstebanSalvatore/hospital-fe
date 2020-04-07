import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            
                
            <footer>
                <div className="row">
                    <div className="col bg-primary" id="primero">
                        <div className="container text-white">
                            <p className="text-uppercase pt-2"><strong>Contactenos</strong> </p>
                            <p><i className="fas fa-home mr-3"></i> San Martín357, SM Tucumán, AR</p>
                            <p><i className="fas fa-phone mr-3"></i> + 54 381 567 88</p>
                        </div>
                    </div>
                    <div className="col bg-info" id="segundo" >
                                <Link to="/contacto"><p><i className="fas fa-envelope mr-3"></i>Envianos un mensajes</p></Link>
                    </div>
                </div>
            </footer>
        )
    }
}