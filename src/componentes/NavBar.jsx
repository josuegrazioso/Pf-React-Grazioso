import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import  { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
      <Navbar bg="info" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Store Phone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/Samsung">Samsung</Nav.Link>
            <Nav.Link as={Link} to="/category/Motorola">Motorola</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}