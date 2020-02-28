import React, { Component } from 'react'
//import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            
                
                <footer>
                    <div className="bg-primary">
                        <div className="text-center text-white">Todos los derechos reservados</div> 
                        <div className="row text-white text-center pt-4">
                            
                            <div className="col-sm">Contactenos</div>
                            <div className="col-sm">Trabaje con Nosotros</div>
                            <div className="col-sm">Sobre Nosotros </div>
                        </div>
                    </div>
                </footer>
            
        )
    }
}