import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaArrowRight,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <Container>
        <Row className="gy-4">
          {/* --- Left Column --- */}
          <Col md={6} lg={4}>
            <div className="footer-logo mb-3 d-flex align-items-center">
              <div className="logo-box me-2">
                <i className="logo-icon"></i>
              </div>
              <h3 className="ms-2 fw-bold mb-0 text-white">
                MY<span className="text-green">WORLD</span>
              </h3>
            </div>
            <p className="footer-desc text-white-50 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis
              sollicitudin augue euismod. Nulla ullam dolor sit amet
              consectetur.
            </p>

            <p className="footer-active text-uppercase fw-bold mb-2">
              Active <span className="text-green">With Us »</span>
            </p>

            <div className="footer-socials d-flex gap-3">
              <a href="#" className="social-icon discord">
                <FaDiscord />
              </a>
              <a href="#" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon telegram">
                <FaTelegramPlane />
              </a>
            </div>
          </Col>

          {/* --- Middle Links --- */}
          <Col md={3} lg={2}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Modes</a></li>
              <li><a href="#">Character</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </Col>

          <Col md={3} lg={2}>
            <h5 className="footer-heading">Support</h5>
            <ul className="footer-links">
              <li><a href="#">Settings & Privacy</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Live Auctions</a></li>
              <li><a href="#">Item Details</a></li>
              <li><a href="#">24/7 Support</a></li>
              <li><a href="#">Our News</a></li>
            </ul>
          </Col>

          {/* --- Newsletter --- */}
          <Col lg={4}>
            <h5 className="footer-heading">Contact Us</h5>
            <p className="text-white-50">
              Contact us to get our latest updates & news.
            </p>
            <Form className="newsletter-form d-flex mt-3">
              <Form.Control
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <Button className="newsletter-btn">
                <FaArrowRight />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* --- Bottom Bar --- */}
      <div className="footer-bottom py-3 mt-5">
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6}>
              <p className="mb-0 text-dark small fw-semibold">
                © 2024 - All Rights Reserved by{" "}
                <span className="text-green">MYWORLD</span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
