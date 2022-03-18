import { createContext, useContext, useState } from "react" 
import swal from "sweetalert"

const MenuContext = createContext([])

export const useMenuContext = () => useContext(MenuContext)

function MenuContextProvider({children}) {
    const [menuList, setMenuList] = useState([])
    const [cantPlatosVegan, setCantPlatosVegan] = useState(0)
    const [cantPlatosNoVegan, setCantPlatosNoVegan] = useState(0)

    const isInMenuList = (id) => {        
        return menuList.findIndex(menu => menu.id === id)
    }   

    const addToListMenu = (item) => {       
        if (isInMenuList(item.id) == -1) {            
            if (menuList.length < 4) {
                if (item.vegan ) {            
                    if ( cantPlatosVegan < 2 ){
                        setCantPlatosVegan( cantPlatosVegan + 1 )                    
                        setMenuList([...menuList, item])
                        swal('Agregado', 'Plato agregado correctamente', 'success')            
                    } else {
                        swal("Error", 'No puede agregar mas platos veganos.', 'error')   
                    }
                } else {
                    if ( cantPlatosNoVegan < 2 ){
                        setCantPlatosNoVegan( cantPlatosNoVegan + 1 )                    
                        setMenuList([...menuList, item])
                        swal('Agregado', 'Plato agregado correctamente', 'success')            
                    } else {
                        swal("Error", 'No puede agregar mas platos No veganos.', 'error')   
                    }            
                }
            } else {
                swal("Error", 'Límite de 4 platos alcanzados.', 'error')
            }

        } else {
            swal("Error", 'Este plato ya se encuentra seleccionado.', 'error')            
        }
    } 

    const totalPrice = () => {
        return menuList.reduce((acum, menu) => acum += menu.pricePerServing, 0)
    }
    
    const timeReadyInMinutes = () => {
        return (menuList.reduce((acum, menu) => acum += menu.readyInMinutes, 0)/menuList.length).toFixed(2)
    }
    
    const promHealtScore=()=>{
        return (menuList.reduce((acum, menu) => acum += menu.healthScore, 0)/menuList.length).toFixed(2)
    }
    
    const removeToListMenu = (item) => {
        if(item.vegan){
            if( cantPlatosVegan > 0 ) {
                setCantPlatosVegan(cantPlatosVegan-1)
            }
        }else{
            if( cantPlatosNoVegan > 0 ) {
                setCantPlatosNoVegan(cantPlatosNoVegan-1)        
            } 
        }
        setMenuList(menuList.filter(menu => menu.id !== item.id))
        swal('Eliminado', 'Plato eliminado correctamente', 'success')

    }

    const removeAllMenu = () => {
        setMenuList([])
        setCantPlatosVegan(0)
        setCantPlatosNoVegan(0)
    }
    
    
    return (
        <MenuContext.Provider value={{
            menuList,
            addToListMenu,
            removeToListMenu,
            removeAllMenu,
            totalPrice,
            timeReadyInMinutes,
            promHealtScore
        }}>
            {children}
        </MenuContext.Provider>
    )
  }
  
  export default MenuContextProvider