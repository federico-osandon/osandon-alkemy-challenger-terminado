import { useReducer } from 'react'
import { Navigate } from 'react-router-dom'
import clienteAxios from '../../config/axios'
import { CERRAR_SESION, LOGIN_EXITOSO, USUARIO_AUTENTICADO } from '../../types/types'
import { contextAuth } from './authContext'
import authReducer from './authReducer'



const initialState = {
    token: localStorage.getItem('token'),
    autenticado: null, 
    mensaje: null, 
    cargando: true
}

function ContextAuthProvider({children}) { 
    const [ state, dispatch ] = useReducer(authReducer, initialState)
    
    const usuarioAutenticado = () => {
        const token = localStorage.getItem('token')        
        if (token) {
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: {autenticado: true}
            })
            
        } else {
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: {autenticado: false, mensaje: 'Usuario no autenticado.'}
            })    
            return <Navigate to= 'login' />       
        }
    }

    const iniciarSesion = async datos => {            
            try {
                const respuesta =  await clienteAxios.post('/', datos)                               
                dispatch({ // este objeto es action
                    type: LOGIN_EXITOSO,
                    payload: respuesta.data
                })               
            } catch (error) {
                console.log(error)
            }           
    }
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    //console.log(state)
    return (
        <contextAuth.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            cargando: state.cargando,
            mensaje: state.mensaje,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion
        }}>
            {children}
        </contextAuth.Provider>
    )
  }
  
  export default ContextAuthProvider