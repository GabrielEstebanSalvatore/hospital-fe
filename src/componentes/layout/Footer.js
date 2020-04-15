import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            

            /*<!-- Footer -->
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
                        <a class="btn-floating btn-dribbble mx-1">
                        <i class="fab fa-dribbble"> </i>
                        </a>
                    </li>
                    </ul>
                   

                </div>
                
                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                </div>
                

                </footer>
                //<!-- Footer -->*/
            <footer className="footer-padre">
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
            </footer>
            /*
            <footer className="page-footer pt-4">
            <div className="row">
                <div className="col bg-primary" id="primero">
                    <div className="container text-white">
                        <p className="text-uppercase pt-2"><strong>Contactenos</strong> </p>
                        <p><i className="fas fa-home mr-3"></i> San Martín357, SM Tucumán, AR</p>
                        <p><i className="fas fa-phone mr-3"></i> + 54 381 567 88</p>
                    </div>
                </div>
                <div className="col bg-info" id="segundo" >
                            <Link to="/contacto"><p><i className="fas fa-envelope mr-3"></i>Contactenos</p></Link>
                </div>
            </div>
            </footer>*/
            
        )
    }
}