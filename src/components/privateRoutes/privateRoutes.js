import React, {useContext,useEffect} from 'react';
import { Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const RutaPrivada = ({ component: Component, ...props}) => {
    const authContext = useContext(AuthContext)
    const {autenticado, clienteAutenticado, cargando} = authContext;

    useEffect(() => {
       
        clienteAutenticado();
        //eslint-disable-next-line
    }, [])

    return (
        <Route {...props} render={props => !autenticado && !cargando ? (
            <Redirect to="/"/>
        ) : (
            <Component {...props} />
        )}/>
    );
}
export default RutaPrivada;