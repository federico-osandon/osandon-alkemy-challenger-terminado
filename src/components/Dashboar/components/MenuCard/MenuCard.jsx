import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import imag from '../../../../img/foto_plato-equilibrado-scaled.jpg'
import { useMenuContext } from "../../context/MenuContext"

const Menu = ({menu}) => {

    const { addToListMenu, removeToListMenu } = useMenuContext()
  
    return (
        <Card>
            <Card.Img variant="top" src={menu.image} alt={menu.title} />
            <Card.Body>
                <Card.Title>{menu.title}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{ __html: menu.summary }}>
                    
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Link to={`/dashboard/detalle/${menu.id}`}>
                            <button className='btn btn-outline-primary w-100'>
                                Detalle
                            </button>
                        </Link>{' '}
                    </Col>
                    <Col>
                        {location.pathname === "/dashboard/buscar" ? 
                                <button 
                                    className='btn btn-outline-success w-100'
                                    onClick={()=>addToListMenu(menu)}
                                >
                                    Agregar
                                </button>
                            :
                                <button 
                                    className='btn btn-outline-danger w-100'
                                    onClick={() => removeToListMenu(menu)}
                                >
                                    Eliminar
                                </button>
                        }
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Menu