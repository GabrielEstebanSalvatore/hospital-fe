import React, { Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
//import Spinner from '../layout/Spinner';
import pexels from '../../assets/pexels-photo-1904769.jpeg'
import foto1 from '../../assets/UI-face-1.jpg'
import foto2 from '../../assets/UI-face-2.jpg'
import foto3 from '../../assets/UI-face-3.jpg'
import foto4 from '../../assets/UI-face-4.jpg'


class homepage extends Component{
   
    render(){
        //if(!libros) return <Spinner />
        return(
            <Fragment>
                <body>
                
                    <div className="turnos-general">
                        <div className="row">
                            <div className="col" >
                                Nuestros servicios
                            </div>
                        </div>
                        <div className="row">

                        <div className="col" id="turnos" >
                                <Link to="/turnos">Turnos</Link>
                                {/*<a href="/turnos">Turnos</a>*/}
                            </div>
                            <div className="col" id="emergencias" >
                                <Link to="/emergencias">Emergencias</Link>
                                {/*<a href="/emergencias">Emergencias</a>*/}
                            </div>
                            <div className="col internaciones" id="internaciones" >
                                <Link to="/internaciones">Internaciones</Link>
                                {/*<a href="/internaciones">Internaciones</a>*/}
                            </div>

                        </div>
                </div>*
                    {/*<div className="col-12 mt-3 pt-4">
                        <Link to="/turnos" className="btn btn-white mt-4">
                            <h2>
                                <i className="fas fa-user-md fa-lg"></i>  {''}
                                <button className="btn btn-light px-5 py-2 primary-btn">
                                    Turnos
                                                </button>
                            </h2>
                        </Link>

                    </div>
                    <div className="col-12 mt-3">
                        <Link to="/emergencias" className="btn btn-white mt-4">
                            <h2>
                                <i className="fas fa-ambulance "></i>  {''}
                                <button className="btn btn-light px-5 py-2 primary-btn">
                                    Emergencias
                                                </button>
                            </h2>
                        </Link>

                    </div>
                    <div className="col-12 mb-5 mt-3">
                        <Link to="/internaciones" className="btn btn-white mt-4">
                            <h2>
                                <i className="fas fa-procedures "></i>  {''}
                                <button className="btn btn-light px-5 py-2 primary-btn">
                                    Internaciones
                                                </button>
                            </h2>
                        </Link>

            </div>*/}
                    <main>
                        
                        {/* SECCIÓN 1 */}
                        <section className="section-1 pt-4">
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="pray">
                                            <img src={pexels} alt="pray" width="500px"  className=""  />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="panel text-left">
                                            <h1>Mr. Devid Smith</h1>
                                            <p className="pt-4">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae aperiam
                                                voluptatum, id ex ratione omnis reiciendis possimus officiis.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat
                                                ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic
                                                expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECCIÓN 3 */}

                        <section className="section-3 container-fluid p-0 text-center bg-primary">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <h1>Experiencias de los clientes</h1>
                                    <p>
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
                        </section>

                        {/* SECCIÓN 4 */}

                        <section className="section-4" id="section-4">
                        <div className="container text-center">
                            <h1 className="text-dark">What our Reader's Say about us</h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="team row ">
                            <div className="col-md-4 col-12 text-center">
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                    <img src={foto4} className="img-fluid border-radius p-4" alt=""/>
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
                            <div className="col-md-4 col-12">
                                <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                                    <div className="carousel-inner text-center">
                                    <div className="carousel-item active">
                                        <div className="card mr-2 d-inline-block shadow">
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
                                        <div className="card  d-inline-block mr-2 shadow">
                                        <div className="card-img-top">
                                            <img src={foto2} className="img-fluid rounded-circle w-50 p-4" alt=""/>
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
                            <div className="col-md-4 col-12 text-center">
                                <div className="card mr-2 d-inline-block shadow-lg">
                                    <div className="card-img-top">
                                    <img src={foto3} className="img-fluid border-radius p-4" alt=""/>
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

                        

                    </main>

                </body>

            </Fragment>    
        );
    }
}
export default homepage;