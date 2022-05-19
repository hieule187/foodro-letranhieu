import React from 'react';
import './styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import iconLogo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="logo-brand">
          <img src={iconLogo} alt="iconLogo" width="65" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="" as={Link} className="me-4 text-center">
              Rations
            </Nav.Link>
            <Nav.Link to="" as={Link} className="me-4 text-center">
              News
            </Nav.Link>
            <Nav.Link to="" as={Link} className="me-4 text-center">
              Delivery
            </Nav.Link>
            <Nav.Link to="" as={Link} className="me-4 text-center">
              Feedback
            </Nav.Link>
            <Nav.Link to="" as={Link} className="me-4 text-center">
              Contact
            </Nav.Link>
          </Nav>

          <Nav className="d-flex menuNav">
            <NavDropdown
              align="end"
              title={<span className="fw-bold">Bucharest</span>}
              className="me-4"
            >
              <NavDropdown.Header className="navDropdown-header d-flex">
                <div>
                  <span className="user-name">Bucharest</span>
                  <div>
                    <span>+40 77-392-660</span>
                  </div>
                </div>
              </NavDropdown.Header>
              <NavDropdown.Item to="" as={Link}>
                Option 1
              </NavDropdown.Item>
              <NavDropdown.Item to="" as={Link}>
                Option 2
              </NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled className="text-dark">
              +40 77-392-660
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
