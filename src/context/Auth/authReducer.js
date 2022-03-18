import { 
    CERRAR_SESION, 
    LOGIN_EXITOSO, 
    USUARIO_AUTENTICADO 
} from "../../types/types";

export default function authReducer (state={}, action) {
    switch (action.type) {

        case LOGIN_EXITOSO :
                localStorage.setItem('token',action.payload.token)
                
                return {
                    ...state,
                    token: action.payload.token,
                    autenticado: true,
                    mensaje: null,
                    cargando: false
                }
            break;
            
            case USUARIO_AUTENTICADO:
                return {
                    ...state,
                    autenticado: action.payload.autenticado,
                    mensaje: action.payload.mensaje,
                    cargando: true
                }
                break
            case CERRAR_SESION:

                    localStorage.removeItem('token')
                    return {
                        ...state,
                        token: undefined,
                        autenticado: false,
                        mensaje: null,
                        cargando: true
                    }
                break;
        default:
            return state
            break;
    }
}