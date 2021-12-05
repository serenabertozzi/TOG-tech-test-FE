import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "../assets/TOG_RGB_Black.png";

const NavigationBar = () => {
  return (
    <Navbar
      className="custom-nav"
      collapseOnSelect
      expand="lg"
      bg="transparent"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              className="custom-nav-item"
              title="Locations"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="custom-nav-item"
              title="Work Spaces"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="custom-nav-item" href="#features">
              Meeting Rooms
            </Nav.Link>
            <NavDropdown
              className="custom-nav-item"
              title="Events"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="custom-nav-item"
              title="About"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="custom-nav-item" href="#stories">
              Stories
            </Nav.Link>
            <Nav.Link
              className="custom-nav-item custom-bold"
              href="#contact"
              className="custom-nav-item fw-bolder"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>|</Nav.Link>
            <NavDropdown
              className="fw-bolder"
              title="EN"
              id="collasible-nav-dropdown"
            >
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
