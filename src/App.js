import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*Vistas*/
import Homepage from './components/routes/homepage';
import GestionClients from './components/routes/gestionClients';
import GestionAdmin_Doctors from './components/routes/gestionAdmin_Doctors';
import GestionAdmin_TurnosClinetes from './components/routes/gestionAdmin_ClientTurns';
import DoctorsGestion from './components/routes/gestionDoctors';
//Usuario
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Contact from './components/routes/contact';
import Edit from './components/routes/turnEdit';

/*Componentes*/
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

/*Context*/
import AlertState from './context/alerts/alertState'
import ProyectState from './context/projects/proyectState';
import AuthState from './context/authentication/authState';
import DoctorsState from './context/doctors/doctorsState'

/*Tomar el token para no perder el usuario*/
import TokenAuth from './config/token';

/*Rutas Privadas*/
import PrivateRoutes from './components/privateRoutes/privateRoutes'

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  TokenAuth(token);
}

function App() {

  
  return (
    <ProyectState>
      <AlertState>
        <AuthState>
          <DoctorsState>
            <Router>
              <div className="app-container">
                <div className="body-container">
                  <div className="header-container">
                    <Navigation />
                  </div>
                  <div className="sidebar-container">
                    <Switch>
                      <Route exact path="/" component={Homepage} />
                      <PrivateRoutes exact path="/gestion" component={GestionClients} />
                      <PrivateRoutes exact path="/gestiondoctores" component={DoctorsGestion} />
                      <PrivateRoutes exact path="/gestionadmin" component={GestionAdmin_Doctors} />
                      <PrivateRoutes exact path="/gestionadminturnos" component={GestionAdmin_TurnosClinetes} />
                      <Route exact path="/contacto" component={Contact} />
                      <Route exact path='/turno/:id' component={Edit} />
                      <Route exact path="/user/signin" component={SignIn} />
                      <Route exact path="/user/signup" component={SignUp} />
                    </Switch>
                  </div>
                  <div className="content-container">
                    <Footer />
                  </div>
                </div>
              </div>
            </Router>
          </DoctorsState>
        </AuthState>
      </AlertState>
    </ProyectState>
  )
}

export default App;
