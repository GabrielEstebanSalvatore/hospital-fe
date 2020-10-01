import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Vistas*/
import homepage from './components/routes/homepage';
import GestionClients from './components/routes/GestionClients';
import gestionAdmin_Doctores from './components/routes/GestionAdmin_Doctors';
import GestionAdmin_TurnosClinetes from './components/routes/GestionAdmin_TurnosClinetes';
import DoctorsGestion from './components/routes/DoctorsGestion';
//Usuario
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Contact from './components/routes/Contact'
import Editar from './components/routes/TurnEdit'

/*Componentes*/
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

/*Context*/
import AlertaState from './context/alerts/alertState'
import ProyectState from './context/projects/proyectState';
import AuthState from './context/authentication/authState';
import DoctoresState from './context/doctors/doctorsState'

/*Tomar el token para no perder el usuario*/
import tokenAuth from './config/token';

/*Rutas Privadas*/
import RutaPrivada from './components/privateRoutes/privateRoutes'

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}


function App() {

  return (
    <ProyectState>
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
                  
                      <RutaPrivada exact path="/gestion" component={GestionClients} />
                      <RutaPrivada exact path="/gestiondoctores" component={DoctorsGestion}/>
                      <RutaPrivada exact path="/gestionadmin" component={gestionAdmin_Doctores}/>
                      <RutaPrivada exact path="/gestionadminturnos" component={GestionAdmin_TurnosClinetes}/>

                      <Route exact path="/contacto" component={Contact} />
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
    </ProyectState>
  )
}

export default App;
