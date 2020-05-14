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
                            <Link to="/contacto" className="text-white">
                                <span className="btn btn-outline-secondary"><i className="fas fa-envelope mr-3"/>Envíanos un correo!</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright: Hospital
               
                </div>
            </footer>

               





















/*


        
                <footer className="page-footer font-small special-color-dark pt-4">

              
                <div className="container">

                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <a className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-gplus mx-1">
                            <i className="fab fa-google-plus-g"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                        <Link to="/contacto" className="text-white">

                            <i className="fas fa-envelope mr-3"/>
                        </Link>
                        </li>
                    </ul>
                </div>
              
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                </div>
                

                </footer>
*/





                //<!-- Footer -->*/
           
           /*<footer className="footer-padre">
                <div className="footer-h1 bg-primary ">
                    <div className="container">
                        <p className="text-uppercase pt-2"><strong>Contactenos</strong> </p>
                        <p><i className="fas fa-home mr-3"></i> San Martín357, SM Tucumán, AR</p>
                        <p><i className="fas fa-phone mr-3"></i> + 54 381 567 88</p>
                    </div>
                </div>
                <div className="footer-h2 bg-info ">
                    <Link to="/contacto" className="text-white"><p><i className="fas fa-envelope mr-3"></i>Contactenos</p></Link>
                </div>
            </footer>*/
                    
        )
    }
}