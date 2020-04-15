import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/*Vistas*/
import Turnos from './componentes/solicitudes/Turnos';
import homepage from './componentes/rutas/homepage';
import Emergencias from './componentes/solicitudes/Emergencias';
import Internaciones from './componentes/solicitudes/Internaciones';
import GestionUsuario from './componentes/rutas/Gestion';
import NuevoDoctor from './componentes/rutas/nuevoDoctor'

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

function App() {

  return (
    <div className="App">
      <ProyectoState>
        <AlertaState>
          <AuthState>
            <DoctoresState>
              <Router>
                <Navigation/>
                <div >
                  <Switch>
                    <Route exact path="/" component={homepage}/>
                    <Route exact path="/turnos" component={Turnos}/>
                    <Route exact path="/emergencias" component={Emergencias}/>
                    <Route exact path="/internaciones" component={Internaciones}/>
                    <RutaPrivada exact path="/gestion" component={GestionUsuario}/>
                    <Route exact path="/nuevodoctor" component={NuevoDoctor}/>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route exact path='/turno/:id' component={Editar}/>

                    <Route exact path="/user/signin" component={Signin}/>
                    <Route exact path="/user/signup" component={Signup}/>
                  </Switch>
                </div>
                  <Footer/>
              
              </Router>
            </DoctoresState>
          </AuthState>
        </AlertaState>
      </ProyectoState>
    </div>
  );
}

export default App;
