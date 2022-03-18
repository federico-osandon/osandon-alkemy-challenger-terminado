import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useContextAuth } from "../../../../context/Auth/authContext"

function NavBar() {

    const { cerrarSesion } = useContextAuth()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               
                <Navbar.Brand >Carta - La Comnada</Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="/" style={{textDecoration: 'none'}}>
                                Menú
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="buscar" style={{textDecoration: 'none'}}>
                                Buscador
                            </NavLink>                            
                        </Nav.Link>                        
                    </Nav>
                    <Nav>                       
                        <Nav.Link onClick={cerrarSesion} >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar