import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSearch, FaPen } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container fluid>

        <Navbar.Brand href="#" className="d-flex align-items-center">
          <div className="logo-box me-2">
            <i className="logo-icon"></i>
          </div>
          <span className="logo-text">
            MY<span className="text-gold">WORLD</span>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav">
          <RxHamburgerMenu className="text-white fs-3" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="menu-links">
            <Nav.Link as={Link} to="/" >HOME</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/modes">MODES</Nav.Link>
            <Nav.Link as={Link} to="/character">CHARACTER</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          <FaSearch className="text-white fs-5 me-3" />
          <Button className="signin-btn d-flex align-items-center">
            <FaPen className="me-2" /> SIGN IN
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
