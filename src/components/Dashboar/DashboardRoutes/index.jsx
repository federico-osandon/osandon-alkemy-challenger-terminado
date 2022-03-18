import { Routes, Route, Navigate } from "react-router-dom"
import MenuListPage from "../pages/MenuListPage/MenuListPage"
import ItemDetailPage from "../pages/PlatoDetailPage/PlatoDetailPage"
import SearchPage from "../pages/SearchPage/SearchPage"

function DashboardRoutes() {
    return (
        <Routes>
             <Route 
                    path="/" 
                    element={<MenuListPage />} 
                />                
                <Route 
                    path="buscar" 
                    element={                        
                        <SearchPage />                                                  
                    } 
                />
                <Route 
                    path="detalle/:id" 
                    element={                        
                        <ItemDetailPage />                                                    
                    } 
                />
                <Route path="*" element={<Navigate to='/dashboard' replace />} />            
        </Routes>
    )
}

export default DashboardRoutes