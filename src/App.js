import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Vistas*/
import homepage from './componentes/rutas/homepage';
import GestionClientes from './componentes/rutas/GestionClientes';
import gestionAdmin_Doctores from './componentes/rutas/gestionAdmin_Doctores';
import GestionAdmin_TurnosClinetes from './componentes/rutas/GestionAdmin_TurnosClinetes';
import GestionDoctores from './componentes/rutas/GestionDoctores';
//Usuario
import Signin from './componentes/auth/signin';
import Signup from './componentes/auth/signup';
import Contacto from './componentes/rutas/Contacto'
import Editar from './componentes/rutas/Editar'

/*Componentes*/
import Navigation from './componentes/layout/Navigation';
import Footer from './componentes/layout/Footer';

/*Context*/
import AlertaState from './context/alertas/alertaState'
import ProyectoState from './context/proyectos/proyectoState';
import AuthState from './context/autenticacion/authState';
import DoctoresState from './context/doctores/doctoresState'

/*Tomar el token para no perder el usuario*/
import tokenAuth from './config/token';

/*Rutas Privadas*/
import RutaPrivada from './componentes/rutasPrivadas/RutaPrivada'

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}


function App2() {

  return (
    <ProyectoState>
      <AlertaState>
        <AuthState>
          <DoctoresState>
            <Router>

              <div className="app-container">



                <div className="body-container">
                <div className="header-container">
                  <Navigation />
                </div>

                  <div className="sidebar-container">
                    <Switch>
                      <Route exact path="/" component={homepage} />
                  
                      <RutaPrivada exact path="/gestion" component={GestionClientes} />
                      <RutaPrivada exact path="/gestiondoctores" component={GestionDoctores}/>
                      <RutaPrivada exact path="/gestionadmin" component={gestionAdmin_Doctores}/>
                      <RutaPrivada exact path="/gestionadminturnos" component={GestionAdmin_TurnosClinetes}/>

                      <Route exact path="/contacto" component={Contacto} />
                      <Route exact path='/turno/:id' component={Editar} />

                      <Route exact path="/user/signin" component={Signin} />
                      <Route exact path="/user/signup" component={Signup} />
                    </Switch>

                  </div>

                  
                <div className="content-container">
                    <Footer />

                </div>
                </div>


              </div>
            </Router>
          </DoctoresState>
        </AuthState>
      </AlertaState>
    </ProyectoState>
  )
}

export default App2;
