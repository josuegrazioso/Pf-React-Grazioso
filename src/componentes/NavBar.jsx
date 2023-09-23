import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => (
<Navbar bg="info" data-bs-theme="info">
<Container>
<Navbar.Brand href="#inicio">Store Phone</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/Category/Samsung">Samsung</Nav.Link>
        <Nav.Link href="/Category/Motorola">Motorola</Nav.Link>
    </Nav>
    <CartWidget className="cart" />
</Container>
</Navbar>
);