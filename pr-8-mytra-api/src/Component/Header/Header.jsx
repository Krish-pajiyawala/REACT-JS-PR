import { Navbar, Nav, Form, FormControl, Container, Offcanvas } from "react-bootstrap";
import { FaRegUser, FaRegHeart, FaShoppingBag, FaSearch, FaChevronRight } from "react-icons/fa";
import Logo from "../../assets/img/Header/myntra-logo.webp";
import offcanvas1 from '../../assets/img/Header/offcanvas-1.webp'
import offcanvas2 from '../../assets/img/Header/offcanvas-2.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css"
function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShow(false);
      }
    };

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar expand="lg" className="py-3 shadow-sm">
        <Container>

          <button className="navbar-toggler border-0 p-0 shadow-none" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <Navbar.Brand className="me-auto ms-5" as={Link} to="/">
            <img src={Logo} height="40" alt="Myntra Logo" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-3">
              <Nav.Link as={Link} to="/man">MEN</Nav.Link>
              <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
              <Nav.Link as={Link} to="/kids">KIDS</Nav.Link>
              <Nav.Link as={Link} to="/home">HOME</Nav.Link>
              <Nav.Link as={Link} to="/beauty">BEAUTY</Nav.Link>
            </Nav>

            <Form className="d-flex align-items-center me-4">
              <div style={{ position: "relative" }}>
                <FaSearch style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", color: "gray", }} />
                <FormControl placeholder="Search for products, brands and more" className="ps-5 header-search" style={{ width: "200px" }} />
              </div>
            </Form>

            <Nav className="me-3">
              <Nav.Link as={Link} to="/addproduct">ADD PRODUCT</Nav.Link>

            </Nav>
          </Navbar.Collapse>

          <div className="d-flex flex-end">
            <Link to="#" className="text-decoration-none text-black d-flex flex-column align-items-center d-none d-md-flex">
              <FaRegUser size={20} />
              <small>Profile</small>
            </Link>

            <Link to="#" className="text-decoration-none text-black d-flex flex-column align-items-center mx-4">
              <FaRegHeart size={20} />
              <small>Wishlist</small>
            </Link>

          </div>
        </Container>
      </Navbar>

      <Offcanvas className="header-offcanvas" show={show} onHide={handleClose}>

        <Offcanvas.Body className="p-0 ">
          <div className="w-100 border-5">
            <img src={offcanvas1} alt="" className="w-100" />
          </div>
          <Nav className="flex-column text-black">
            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/man">MEN <span><FaChevronRight /></span></Nav.Link>
            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/women">WOMEN <span><FaChevronRight /></span></Nav.Link>
            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/kids">KIDS <span><FaChevronRight /></span></Nav.Link>
            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/home">HOME <span><FaChevronRight /></span></Nav.Link>
            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/beauty">BEAUTY<span><FaChevronRight /></span></Nav.Link>

          </Nav>
          <hr />
          <Nav className="flex-column text-black">

            <Nav.Link className="d-flex justify-content-between text-black " onClick={handleClose} as={Link} to="/addproduct">ADD PRODUCT <span><FaChevronRight /></span></Nav.Link>
          </Nav>

          <div className="w-100 border-5  offcanvas-img-2 mt-5">
            <img src={offcanvas2} alt="" className="w-100" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
