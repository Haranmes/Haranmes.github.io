import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../images/LogoRamez.svg'
const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
            <NavLink eventKey="1" as={Link} to="/"  >
                    <img
              src={logo}
              width="70"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </NavLink>
                <Nav className="m-auto justify-content-center" style={{ flex: 1}}>
                    <NavLink eventKey="1" as={Link} to="/" >Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/contact">Contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;