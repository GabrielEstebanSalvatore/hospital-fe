import React, { Fragment } from 'react';
import foto1 from '../../assets/UI-face-1.jpg'
import foto2 from '../../assets/UI-face-2.jpg'
import foto3 from '../../assets/UI-face-3.jpg'
import foto4 from '../../assets/UI-face-4.jpg'
//import { Carousel } from 'antd';
import CarrouselHomePage from './homePage/seccion1/seccion1'
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

                   
                    <CarrouselHomePage/>
                    {/* -------------------------------------------------------------------- */}

                    {/* SECCIÓN 2 */}
                    <ContadorClientes/>
                    {/* -------------------------------------------------------------------- */}

                    {/* SECCIÓN 3 */}
                    <ContadorRate/>
                    {/* -------------------------------------------------------------------- */}

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