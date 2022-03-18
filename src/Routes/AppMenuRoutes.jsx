import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import RequireAuthenticate from '../components/RequireAuthenticate'

const Login = lazy(() => import('../components/Login/Login'))
const Dashboard = lazy(() => import('../components/Dashboar/Dashboard'))

function AppMenuRoutes() {
  return (
    <Suspense fallback={<label>Cargando...</label>} >
        <BrowserRouter>
            <Routes >
                <Route 
                    path="/login" 
                    element={<Login />} 
                />
                <Route 
                    path="/dashboard/*" 
                    element={
                        <RequireAuthenticate>
                            <Dashboard />
                        </RequireAuthenticate>                          
                    } 
                />               
                <Route path="/*" element={<Navigate to='login' replace />} />            
            </Routes>            
        </BrowserRouter>
    </Suspense>
  )
}

export default AppMenuRoutes