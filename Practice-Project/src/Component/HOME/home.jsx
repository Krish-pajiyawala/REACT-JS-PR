import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import "./home.css";
import WhatWeDo from "../ABOUT/about";
import DetailsSection from "../MODES/mode";
import TeamSection from "../CHARACTER/character";

const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      <Carousel fade controls indicators={false} interval={5000} pause={false}>
        <Carousel.Item className="slide slide-1">
          <Container fluid className="slide-container">
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={8} md={10}>
                <span className="live-tag px-3 py-1 d-inline-block mb-3">LIVE GAMING</span>
                <h1 className="display-2 fw-bold steaming-text">STEAMING</h1>
                <p className="text-white-50 fw-semibold fs-5 mb-4">VIDEO GAMES ONLINE</p>
                <Button className="contact-btn">CONTACT US</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="slide slide-2">
          <Container fluid className="slide-container">
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={8} md={10}>
                <span className="live-tag px-3 py-1 d-inline-block mb-3">NEW TOURNAMENT</span>
                <h1 className="display-2 fw-bold steaming-text">JOIN THE BATTLE</h1>
                <p className="text-white-50 fw-semibold fs-5 mb-4">
                  COMPETE WITH THE BEST PLAYERS ONLINE
                </p>
                <Button className="contact-btn">REGISTER NOW</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="slide slide-3">
          <Container fluid className="slide-container">
            <Row className="justify-content-center align-items-center text-center">
              <Col lg={8} md={10}>
                <span className="live-tag px-3 py-1 d-inline-block mb-3">STREAMING LIVE</span>
                <h1 className="display-2 fw-bold steaming-text">WATCH YOUR HEROES</h1>
                <p className="text-white-50 fw-semibold fs-5 mb-4">
                  EXPERIENCE THE ACTION IN REAL TIME
                </p>
                <Button className="contact-btn">WATCH NOW</Button>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
    <WhatWeDo/>
    <DetailsSection/>
    <TeamSection/>
    </>
  );
};

export default HeroSection;


