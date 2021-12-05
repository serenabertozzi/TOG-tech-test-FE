import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../assets/TOG_RGB_Black.png";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <Container>
        <Navbar.Brand href="#home">Logo qui</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Locations" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Work Spaces" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Meeting Rooms</Nav.Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Stories</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>|</Nav.Link>
            <NavDropdown title="EN" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">GR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">FR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ES</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
