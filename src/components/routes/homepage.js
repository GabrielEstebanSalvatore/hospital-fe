import React, { Fragment } from 'react';
import foto1 from '../../assets/UI-face-1.jpg'
import foto2 from '../../assets/UI-face-2.jpg'
import foto3 from '../../assets/doctor.jpg'
import foto4 from '../../assets/doctora.jpg'
//import { Carousel } from 'antd';
import CarrouselHomePage from './homePage/sectionOne/sectionOne'
import ContadorClientes from './homePage/sectionTwo/sectionTwo';
import ContadorRate from './homePage/sectionThree/ContadorRate';

const homepage = () => {

    return (
        <Fragment>
            <div className="homepage">

                <CarrouselHomePage />

                {/* SECCIÓN 2 */}
                <ContadorClientes />

                {/* SECCIÓN 3 */}
                <ContadorRate />

                {/* SECCIÓN 4 */}

                <section className="section-4" >
                    <div className="">
                        <h1 className="">Acerca de nosotros</h1>

                    </div>
                    <div className="section-4-container ">
                        <div className="team-1 text-center">
                            <div className="card  d-inline-block shadow-lg">
                                <div className="card-img-top">
                                    <img src={foto4} className="img-fluid rounded-circle w-30 p-4" alt="" />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title">Samanta Robles</h3>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                        minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                        </p>
                                    <a href="/" className="text-secondary text-decoration-none">Ver perfil</a>
                                    <p className="text-black-50">Gerente General</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-2 ">
                            <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                                <div className="carousel-inner text-center">
                                    <div className="carousel-item active">
                                        <div className="card shadow">
                                            <div className="card-img-top">
                                                <img src={foto1} className="img-fluid rounded-circle w-50 p-4" alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">Claudio Ruso</h3>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                                    minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                                </p>
                                                <a href="/" className="text-secondary text-decoration-none">Ver perfil</a>
                                                <p className="text-black-50">Director Odontología</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card shadow">
                                            <div className="card-img-top">
                                                <img src={foto2} className="img-fluid rounded-circle w-50 p-4 " alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">Cristian Gonzales</h3>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                                    minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                                </p>
                                                <a href="/" className="text-secondary text-decoration-none">Ver perfil</a>
                                                <p className="text-black-50">Director Cardiología</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-3 text-center">
                            <div className="card shadow-lg">
                                <div className="card-img-top">
                                    <img src={foto3} className="img-fluid rounded-circle w-30 p-4" alt="" />
                                </div>

                                <div className="card-body">
                                    <h3 className="card-title">Esteban Ruiz</h3>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                        minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                        </p>
                                    <a href="/" className="text-secondary text-decoration-none">Ver perfil</a>
                                    <p className="text-black-50">Director Pediatría</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>

        </Fragment>
    );

}
export default homepage;