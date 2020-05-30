import React, {useReducer} from 'react';
import alertaReducer from './alertaReducer'
import alertaContext from './alertaContext'

import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types';

const AlertaState = props => {
    const initialState = {
        alerta:null
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
        
        // Después de 5 segundos limpiar la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 4000)
    }
    
    /*setTimeout(()=>{

        ocultarAlerta()
    },3000)
    */
    const ocultarAlerta = ()=>{
        // Después de 5 segundos limpiar la alerta
        dispatch({
            type: OCULTAR_ALERTA
        })
    }

    return(
        <alertaContext.Provider
        value={{
            alerta: state.alerta,
            mostrarAlerta,
            ocultarAlerta
        }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;