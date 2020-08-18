import React from 'react';
import { Link } from 'react-router-dom';

const CarrouselHomePage = () => {


    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="homepage-header-turnos">
                        <div className="homepage-turnos-mascara">{/*tinee la mascara oscura*/}
                            <div className="homepage-turnos-contenido">

                                <h4>Solicitud de Turnos</h4>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis placeat voluptatum ducimus magni non facere dolorem accusamus ut voluptate ipsa quibusdam perspiciatis quaerat, illo nulla necessitatibus laboriosam, delectus quisquam!</span>
                                <Link to="/user/signin"><p >Turnos</p></Link>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="homepage-header-emergencias">
                        <div className="homepage-emergencias-mascara">
                            <div className="homepage-emergencias-contenido">

                            <h4>Solicitud de Emergencias</h4>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis placeat voluptatum ducimus magni non facere dolorem accusamus ut voluptate ipsa quibusdam perspiciatis quaerat, illo nulla necessitatibus laboriosam, delectus quisquam!</span>
                             <Link to="/user/signin"><p>Emergencias</p></Link>
                            

                            </div>

                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="homepage-header-internaciones">
                        <div className="homepage-internaciones-mascara">
                            <div className="homepage-internaciones-contenido">

                            <h4>Solicitud de Internaciones</h4>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis placeat voluptatum ducimus magni non facere dolorem accusamus ut voluptate ipsa quibusdam perspiciatis quaerat, illo nulla necessitatibus laboriosam, delectus quisquam!</span>
                     
                             <Link to="/user/signin"><p>Internaciones</p></Link>
                            

                            </div>
                        </div>
                    </div>
                  </div>
            </div>
            <a className="carousel-control-prev " href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )

}
export default CarrouselHomePage