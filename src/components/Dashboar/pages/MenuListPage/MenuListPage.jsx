import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import clienteAxios from "../../../../config/axios"
import MenuList from "../../components/MenuList"
import { useMenuContext } from "../../context/MenuContext"
//para traer por producto
//GET https://api.spoonacular.com/food/products/{id}
      

function MenuListPage() {
    
    const { menuList, removeAllMenu, totalPrice, timeReadyInMinutes, promHealtScore } = useMenuContext()

    return (        
        <>
            { menuList.length === 0 ? 
                    <Row>
                        <center>
                            <h2>Todavía no ha seleccionado ningún plato.</h2> 
                        </center>
                    </Row>
                :
                    <> 
                        <center>
                            <h2>Menú Seleccionado</h2> 
                        </center>
                        <Row className="m-5" style={{fontSize: 22}}>
                            <Col md={3}>
                                Precio total: ${totalPrice().toFixed(2)}
                            </Col>
                            <Col md={3}>
                                Promedio De preparación (en min.): {timeReadyInMinutes()}
                            </Col>
                            <Col md={3}>
                                Promedio De Healt Score: {promHealtScore()}
                            </Col>
                            <Col md={3}>
                                <button 
                                    className="btn btn-outline-danger btn-lg"
                                    onClick={removeAllMenu}
                                >
                                    Vaciar carrito
                                </button>
                            </Col>
                        </Row>
                        <MenuList menuList={menuList} /> 
                    </>                  
            }
        </>
    )
}

export default MenuListPage