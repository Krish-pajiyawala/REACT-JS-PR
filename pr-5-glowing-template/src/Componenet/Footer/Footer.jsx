import { Button, Col, Form, Row, InputGroup } from "react-bootstrap"
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa6";
import './Footer.css'

import visa from './Icons/visa.svg'
import master from './Icons/mastercard.svg'
import amex from './Icons/amex.svg'
import paypal from './Icons/paypal.svg'
import diners from './Icons/diners.svg'
import discover from './Icons/discover.svg'
const Footer = () => {
  return (
       <footer className="bg-light text-dark py-5 px-4">
        <Row>
          <Col md={2} className="mb-4">
            <h5>Company</h5>
            <p>Find a location nearest you. See <strong>Our Stores</strong></p>
            <p><strong>+391 (0)35 2568 4593</strong></p>
            <p>hello@domain.com</p>
          </Col>

          <Col md={2} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>New Products</li>
              <li>Best Sellers</li>
              <li>Bundle & Save</li>
              <li>Online Gift Card</li>
            </ul>
          </Col>

          <Col md={2} className="mb-4">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li>Start A Return</li>
              <li>Contact Us</li>
              <li>Shipping FAQ</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col md={5} className="mb-4">
            <h5>Good emails.</h5>
            <p>Enter your email below to be the first to know about new collections and product launches.</p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter your email address"
                aria-label="Email"
              />
              <Button variant="dark" id="button-subscribe">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>

       

        <Row className="align-items-center pt-5">
          <Col md={4} className="text-center text-md-start mb-2 mb-md-0">
            <small className="me-3">© Glowing 2025 | Powered by Shopify</small>
            <span className="me-2"><FaInstagram className="fs-5"/></span>
            <span className="me-2"><FaXTwitter className="fs-5"/></span>
            <span className="me-2"><FaFacebook className="fs-5"/></span>
            <span className="me-2"><FaYoutube className="fs-5"/></span>
          </Col>

          <Col md={4} className="text-center mb-2 mb-md-0">
            <h3 className="mb-0">GLOWING</h3>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <span className="ms-2">
              <img src={visa} alt="" width="35px" />
            </span>
            <span className="ms-2">
              <img src={master} alt="" width="35px" />

            </span>
            <span className="ms-2">
              <img src={amex} alt="" width="35px" />

            </span>
            <span className="ms-2">
              <img src={diners} alt="" width="35px" />

            </span>
            <span className="ms-2">
              <img src={discover} alt="" width="35px" />

            </span>
          </Col>
        </Row>
    </footer>

  )
}

export default Footer