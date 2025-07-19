// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

export default function Navbar() {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">Research Portal</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/directory">Directory</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}
