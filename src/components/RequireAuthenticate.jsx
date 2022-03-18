import { Navigate } from "react-router-dom"
import { useContextAuth } from "../context/Auth/authContext"


const RequireAuthenticate = ({ children }) => {

    const {autenticado} = useContextAuth()    
    const token = localStorage.getItem("token")
    
    if (!token) {
        
        return <Navigate to="/login" />
    }

    return children
}

export default RequireAuthenticate