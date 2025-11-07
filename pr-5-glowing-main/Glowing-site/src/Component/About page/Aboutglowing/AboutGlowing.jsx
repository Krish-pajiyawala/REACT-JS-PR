import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutGlowing.css";
import glowImg from "../../../assets/about image/Glowing.webp";

function AboutGlowing() {
  return (
    <section className="about-glowing">
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <div className="glow-img-wrap">
              <img src={glowImg} alt="Glowing" className="glow-img" />
              <div className="shine"></div>
            </div>
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <h2 className="glow-title">About Glowing</h2>
            <p className="glow-desc">
              Complexion-perfecting natural foundation enriched with
              antioxidant-packed superfruits, vitamins, and other
              skin-nourishing nutrients. Creamy liquid formula sets with a
              pristine matte finish for soft, velvety smooth skin. Made using
              clean, non-toxic ingredients, our products are designed for
              everyone. If I fell in love with a woman for an artistic reason,
              or from the point of view of my work, I think it would rob her of
              something. We live in an era of globalization and the era of the
              woman. Never in the history of the world have women been more in
              control of their destiny.
            </p>

            <Row className="mt-4">
              <Col md={6} sm={12}>
                <h5 className="glow-subtitle">Message</h5>
                <p className="glow-subtext">
                  Send us a text & an ambassador will respond when available.
                </p>
                <p className="glow-contact">1-814-251-9966</p>
              </Col>

              <Col md={6} sm={12}>
                <h5 className="glow-subtitle">Store Hours</h5>
                <p className="glow-time">
                  Mon – Fri: <span>08:30 – 20:00</span>
                </p>
                <p className="glow-time">
                  Sat & Sun: <span>09:30 – 21:30</span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutGlowing;
