import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer ">
                <div className="container">
                    <ul className="list-unstyled list-inline text-center py-2">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Contactanos</h5>
                            
                        </li>
                        <li className="list-inline-item pr-4">
                            <Link to="/contact" className="text-white">
                                <span className="btn btn-outline-secondary"><i className="fas fa-envelope mr-3"/>Envíanos un correo!</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright: Hospital
                
                </div>
            </footer>
                    
        )
    }
}