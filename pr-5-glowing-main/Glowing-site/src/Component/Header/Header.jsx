import React, { useState } from 'react';
import './Header.css'
import { Navbar, Container, Nav, NavDropdown, Badge, Button, Offcanvas, Row, Col, Form } from 'react-bootstrap';

import { FaSearch, FaUser, FaStar, FaShoppingCart, FaBars, FaChevronRight, FaInstagram, FaFacebook, FaYoutube, } from 'react-icons/fa';

import { FaXTwitter } from "react-icons/fa6";

import Logo from '../../assets/about image/logo-dark.png'
import { Link } from 'react-router';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <>
      <Navbar expand="xl" className="bg-white py-3 border-bottom">
        <Container fluid className="px-4">
          
          <div className="d-flex align-items-center">
            <Button
              variant="light"
              onClick={toggleSidebar}
              className="d-xl-none me-3"
            >
              <FaBars />
            </Button>

            <Nav className="d-none d-xl-flex gap-4 text-dark">
              <Nav.Link as={Link} to={'/'} className="text-black">HOME</Nav.Link>

              {/* SHOP Dropdown */}
              <NavDropdown
                title={<span className="text-black">SHOP</span>}
                id="nav-dropdown-shop"
                show={shopOpen}
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
                onClick={() => setShopOpen(!shopOpen)}
              >
                <NavDropdown.Item as={Link} to="/leftslider">Left Sidebar</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to='/product' className="text-black">PRODUCT</Nav.Link>

              {/* PAGES Dropdown */}
              <NavDropdown
                title={<span className="text-black">PAGES</span>}
                id="nav-dropdown-pages"
                show={pagesOpen}
                onMouseEnter={() => setPagesOpen(true)}
                onMouseLeave={() => setPagesOpen(false)}
                onClick={() => setPagesOpen(!pagesOpen)}
              >
                <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              </NavDropdown>

              {/* BLOG Dropdown */}
              <NavDropdown
                title={<span className="text-black">BLOG</span>}
                id="nav-dropdown-blog"
                show={blogOpen}
                onMouseEnter={() => setBlogOpen(true)}
                onMouseLeave={() => setBlogOpen(false)}
                onClick={() => setBlogOpen(!blogOpen)}
              >
                <NavDropdown.Item as={Link} to="/blog-left-sidebar">Left Sidebar</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="blog-with-sidebar">Width Sidebar</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          {/* Center Logo */}
          <div className="position-absolute start-50 translate-middle-x">
            <Navbar.Brand>
              <img className="navbar-logo" src={Logo} alt="Logo" />
            </Navbar.Brand>
          </div>

          {/* Right side icons */}
          <div className="d-flex gap-3 align-items-center ms-auto">
            <FaSearch />
            <FaUser />
            <FaStar />
            <div className="position-relative">
              <FaShoppingCart />
              <Badge
                bg="dark"
                pill
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: '0.6rem' }}
              >
                0
              </Badge>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Sidebar / Offcanvas */}
      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start">
        <Offcanvas.Body className="p-0">
          <div className="d-flex flex-column h-100">
            {/* Header */}
            <div className="px-4 py-3 border-bottom">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">GLOWING</h4>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={toggleSidebar}
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow-1 px-4 py-3">
              {["HOME", "SHOP", "PRODUCT", "PAGES", "BLOG"].map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex justify-content-between align-items-center py-2 border-bottom"
                >
                  <span>{item}</span>
                  <FaChevronRight />
                </div>
              ))}
            </div>

            {/* Language and Currency */}
            <div className="px-4 py-3 border-top">
              <Row className="mb-2">
                <Col>
                  <Form.Label className="small text-muted d-block mb-1">
                    Language
                  </Form.Label>
                  <Form.Select aria-label="Select Language">
                    <option>ENGLISH</option>
                    <option>FRANCAIS</option>
                    <option>ITALIANO</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label className="small text-muted d-block mb-1">
                    Currency
                  </Form.Label>
                  <Form.Select aria-label="Select Currency">
                    <option>FRANCE (EUR €)</option>
                    <option>UNITED STATES (USD $)</option>
                    <option>VIETNAM (USD $)</option>
                  </Form.Select>
                </Col>
              </Row>
            </div>

            {/* Social icons */}
            <div className="px-4 py-3 d-flex gap-3 border-top">
              <FaInstagram />
              <FaXTwitter />
              <FaFacebook />
              <FaYoutube />
            </div>

            {/* Button */}
            <div className="px-4 pb-4">
              <Button variant="dark" className="w-100">
                Sign in / Register
              </Button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
