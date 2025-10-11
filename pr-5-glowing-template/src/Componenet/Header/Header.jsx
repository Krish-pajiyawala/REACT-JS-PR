import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsSearch, BsPerson, BsStar, BsBag } from 'react-icons/bs';
import './header.css';
const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
        <Nav className="me-auto nav-links">
          <Nav.Link href="#" className="nav-link-home mx-4">HOME</Nav.Link>
          <Nav.Link href="#" className="nav-link-home me-4">SHOP</Nav.Link>
          <Nav.Link href="#" className="nav-link-home me-4">PRODUCT</Nav.Link>
          <NavDropdown title="PAGES" id="pages-dropdown" className="nav-dropdown-item me-4">
            <NavDropdown.Item href="#">ABOUT US</NavDropdown.Item>
            <NavDropdown.Item href="#">CONTACT US</NavDropdown.Item>
            <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="BLOG" id="blog-dropdown" className="nav-dropdown-item">
            <NavDropdown.Item href="#">Left Sidebar</NavDropdown.Item>
            <NavDropdown.Item href="#">Blog Post</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Brand href="#" className="mx-auto brand-logo">
          GLOWING
        </Navbar.Brand>
        <Nav className="ms-auto right-icons">
          <Nav.Link href="#" className='ms-3'><BsSearch /></Nav.Link>
          <Nav.Link href="#" className='ms-3'><BsPerson /></Nav.Link>
          <Nav.Link href="#" className='ms-3'><BsStar /></Nav.Link>
          <Nav.Link href="#" className="cart-icon-container ms-3 me-5">
            <BsBag />
            <span className="cart-badge">0</span>
          </Nav.Link>
        </Nav>
    </Navbar>
  );
};
export default Header;