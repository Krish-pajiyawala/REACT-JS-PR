import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaSearch, FaPen } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar py-3">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <div className="logo-box me-2">
            <i className="logo-icon"></i>
          </div>
          <span className="logo-text">
            MY<span className="text-gold">WORLD</span>
          </span>
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="navbar-nav">
          <RxHamburgerMenu className="text-white fs-3" />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="menu-links">
            <Nav.Link href="#" className="active">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">MODES</Nav.Link>
            <Nav.Link href="#">CHARACTER</Nav.Link>
            <Nav.Link href="#">NEWS</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right section */}
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
