import React, {useReducer} from 'react';
import alertaReducer from './alertReducer'
import alertaContext from './alertContext'

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = props => {
    const initialState = {
        alert:null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

     // Funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type:  MOSTRAR_ALERTA,
            payload: {
                msg, 
                categoria
            }
        });
        
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 4000)
    }
    
    const ocultarAlerta = ()=>{
        // Después de 5 segundos limpiar la alerta
        dispatch({
            type: OCULTAR_ALERTA
        })
    }

    return(
        <alertaContext.Provider
        value={{
            alert: state.alert,
            mostrarAlerta,
            ocultarAlerta
        }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;