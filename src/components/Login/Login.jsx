import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useContextAuth } from '../../context/Auth/authContext'

import swal from 'sweetalert'
import './Login.css'


function Login() {
    const [usuario, setUsuario] = useState(initialValue)
    const [condition, setCondition] = useState(false)
    const [botonDesactivado, setBotonDesactivado] = useState(false)

    const { iniciarSesion, token, mensaje, cargando } = useContextAuth()   
    

    if(token) return <Navigate to='/dashboard' replace />

    const handleOnSubmit = (e) => {
        e.preventDefault()           
        setBotonDesactivado(true)
        if( (usuario.email ==='' || usuario.password === '') ) {
            setCondition(true)
            setBotonDesactivado(false)
            swal('Login','Debe ingresar todos los datos', 'warning')
        }  else {
            iniciarSesion(usuario)                      
        }
              
    }

    const handleOnChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <div className="formulario mt-5"> 
                <h1>LOGIN</h1>  
                <form 
                    className='form border border-1 border-primary w-25 p-5 rounded shadow-lg'
                    onSubmit={handleOnSubmit}
                >
                    <input 
                        className='form-control'
                        type = 'email' 
                        name='email'
                        placeholder = 'Ingrese el email'
                        onChange={handleOnChange}
                        value={usuario.email}
                    />
                    <br />
                    <input 
                        className='form-control'
                        type = 'password' 
                        name='password'
                        placeholder = 'Ingrese la contraseña'
                        onChange={handleOnChange}
                        value={usuario.password}
                    />
                    <br />
                    <button
                        className = 'btn btn-primary w-100 mt-3' 
                        disabled={botonDesactivado}
                    >
                        {botonDesactivado ? 'Cargando' : 'Enviar'}
                    </button>
                </form>
           
        </div>
    )
}

export default Login


const initialValue = {
    email: '',
    password: ''
}
