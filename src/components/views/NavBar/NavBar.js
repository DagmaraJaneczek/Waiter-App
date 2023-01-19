import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return(
      <Navbar bg="primary" variant="dark" className="rounded">
        <Container>
          <Navbar.Brand href="#home" >Waiter.app</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link  as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavBar;