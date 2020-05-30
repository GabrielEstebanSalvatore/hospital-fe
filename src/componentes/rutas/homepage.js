import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import pexels from '../../assets/pexels-photo-1904769.jpeg'
import foto1 from '../../assets/UI-face-1.jpg'
import foto2 from '../../assets/UI-face-2.jpg'
import foto3 from '../../assets/UI-face-3.jpg'
import foto4 from '../../assets/UI-face-4.jpg'
//import { Carousel } from 'antd';
import ContadorClientes from './homePage/seccion2/seccion2';
import ContadorRate from './homePage/seccion3/ContadorRate';

const homepage =() => {
    
  
    
    //FIDO
   
        //if(!libros) return <Spinner />
        return (
            <Fragment>
                <div className="homepage">


                    {/* SECCIÓN 1 */}
                    {/*<Carousel className="ant-carousel" autoplay>
                        <div className="homepage-header-turnos">
                        <h3>1</h3>
                        </div>
                        <div className="homepage-header-emergencias">
                        <h3>2</h3>
                        </div>
                        <div className="homepage-header-internaciones">
                        <h3>3</h3>
                        </div>
                    </Carousel>*/}

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="homepage-header-turnos">
                                <Link to="/turnos"><p >Turnos</p></Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="homepage-header-emergencias">
                                <Link to="/emergencias"><p>Emergencias</p></Link>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="homepage-header-internaciones">
                                <Link to="/internaciones"><p>Internaciones</p></Link>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    {/*<div className="homepage-header ">
                        <div className="homepage-header-turnos" >
                            <Link to="/turnos"><p >Turnos</p></Link>
                            
                        </div>
                        <div className="homepage-header-emergencias" >
                            <Link to="/emergencias"><p>Emergencias</p></Link>
                            
                        </div>
                        <div className="homepage-header-internaciones" >
                            <Link to="/internaciones"><p>Internaciones</p></Link>
                            
                        </div>
                    </div>*/}
                    {/* -------------------------------------------------------------------- */}

                    {/* SECCIÓN 2 */}
                    <ContadorClientes/>
                    {/* -------------------------------------------------------------------- */}

                    {/* SECCIÓN 3 */}
                    <ContadorRate/>
                    {/* -------------------------------------------------------------------- */}

                    {/* SECCIÓN 4 */}    
                    {/*<section className="section-4 container-fluid p-0 text-center bg-primary">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <h1>Experiencias de los clientes</h1>
                                        <p className="text-white">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem alias perspiciatis omnis quod possimus odit
                                            voluptatum! Sunt ea quasi praesentium, tenetur doloribus animi obcaecati, sint nemo quae laudantium iusto unde
                                            eaque nostrum nobis voluptatum
                                    </p>
                                    </div>
                                </div>
                                <div className="platform row ">
                                    <div className="col-md-6 col-sm-12 text-right">
                                        <div className="desktop shadow-lg">
                                            <div className="d-flex flex-row justify-content-center">
                                                <i className="fas fa-desktop fa-3x py-2 pr-3"></i>
                                                <div className="text text-left">
                                                    <h3 className="pt-1 m-0">Desktop</h3>
                                                    <p className="p-0 m-0">On website</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 text-left">
                                        <div className="desktop shadow-lg">
                                            <div className="d-flex flex-row justify-content-center">
                                                <i className="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
                                                <div className="text text-left">
                                                    <h3 className="pt-1 m-0">On Mobile</h3>
                                                    <p className="p-0 m-0">On Play Store</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>*/}

                    {/* SECCIÓN 4 */}
                            
                   <section className="section-4" >
                            <div className="">
                                <h1 className="">What our Reader's Say about us</h1>
                                <p className="text-center">Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="section-4-container ">
                                <div className="team-1 text-center">
                                    <div className="card  d-inline-block shadow-lg">
                                        <div className="card-img-top">
                                        <img src={foto4} className="img-fluid rounded-circle w-30 p-4" alt=""/>
                                        </div>
                                        <div className="card-body">
                                        <h3 className="card-title">Blalock Jolene</h3>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                            minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                        </p>
                                        <a href="/" className="text-secondary text-decoration-none">Go somewhere</a>
                                        <p className="text-black-50">CEO at Google</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-2 ">
                                    <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                                        <div className="carousel-inner text-center">
                                        <div className="carousel-item active">
                                            <div className="card shadow">
                                            <div className="card-img-top">
                                                <img src={foto1} className="img-fluid rounded-circle w-50 p-4" alt=""/>
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">Allen Agnes</h3>
                                                <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                                minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                                </p>
                                                <a href="/" className="text-secondary text-decoration-none">Go somewhere</a>
                                                <p className="text-black-50">CEO at Google</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card shadow">
                                            <div className="card-img-top">
                                                <img src={foto2} className="img-fluid rounded-circle w-50 p-4 " alt=""/>
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">Amiel Barbara</h3>
                                                <p className="card-text">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                                minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                                </p>
                                                <a href="/" className="text-secondary text-decoration-none">Go somewhere</a>
                                                <p className="text-black-50">CEO at Google</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="team-3 text-center">
                                    <div className="card shadow-lg">
                                        <div className="card-img-top">
                                        <img src={foto3} className="img-fluid rounded-circle w-30 p-4" alt=""/>
                                        </div>
                                        
                                        <div className="card-body">
                                        <h3 className="card-title">Olivia Louis</h3>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure autem recusandae, veniam, illo dolor soluta assumenda
                                            minima quia velit officia sit exercitationem nam ipsa, repellendus aut facilis quasi voluptas!
                                        </p>
                                        <a href="/" className="text-secondary text-decoration-none">Go somewhere</a>
                                        <p className="text-black-50">CEO at Google</p>
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