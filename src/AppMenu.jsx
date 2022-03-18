import ContextAuthProvider from './context/Auth/authState';

import AppMenuRoutes from './Routes/AppMenuRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'sweetalert/dist/sweetalert.css'
import './App.css'
import MenuContextProvider from './components/Dashboar/context/MenuContext';

function AppMenu() { 
    return (
        <ContextAuthProvider >  
            <MenuContextProvider >            
                <AppMenuRoutes />
            </MenuContextProvider>        
        </ContextAuthProvider>
        
    )
}

export default AppMenu
