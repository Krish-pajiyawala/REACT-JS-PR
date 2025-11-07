import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Details.css";
import img1 from "../../../assets/about image/featured1.png";
import img2 from "../../../assets/about image/featured2.png";
import img3 from "../../../assets/about image/featured3.png";

function Details() {
  return (
    <section className="details-section">
      <Container>
        <Row>
          <Col md={12}>
            {/* Main Heading */}
            <h2 className="details-title">
              We strive to live with compassion,<br/> kindness and empathy
            </h2>
            
            {/* Desc */}
            <p className="details-desc">
              A lot of so-called stretch denim pants out there are just glorified sweatpants – they get baggy and <br/>lose their shape. Not cool. Our tightly knitted fabric holds its form after repeated wear. Plus,<br/> Aldays dress up or down, no prob. So you can wear them all day. Get it?</p>

            {/* Three Boxes */}
            <Row className="features">
              <Col md={4}>
                <div className="feature-box">
                  <div className="feature-icon"><img src={img1} alt="img1"/>
                  </div>
                  <h5>Guaranteed PURE</h5>
                  <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature-box">
                  <div className="feature-icon"><img src={img2} alt="img2"/></div>
                  <h5>Completely Cruelty-Free</h5>
                  <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="feature-box">
                  <div className="feature-icon"><img src={img3} alt="img3"/></div>
                  <h5>Ingredient Sourcing</h5>
                  <p>All Grace formulations adhere to strict purity standards and will never contain harsh or toxic ingredients</p>
                </div>
              </Col>
            </Row>

            {/* Bottom Period */}
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Details;