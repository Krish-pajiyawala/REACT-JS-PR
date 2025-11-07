import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";

const WhatWeDo = () => {
  // 🔹 Different images for each card
  const image1 = "https://official.garena.com/intl/v1/config/gallery_ff.jpg";
  const image2 = "https://official.garena.com/intl/v1/config/gallery_df.jpg";

  return (
    <section className="what-we-do py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">About Us</h2>
        <Row className="justify-content-center g-4">
          {/* Card 1 */}
          <Col md={5} sm={12}>
            <Card className="shadow-sm border-light p-4 what-card">
              <Card.Img
                variant="top"
                src={image1}
                className="about-card-img mb-3"
              />
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="red-bar me-2"></div>
                  <h4 className="fw-bold mb-0">Games</h4>
                </div>
                <p className="text-secondary mb-3">
                  Garena exclusively operates top-tier mobile and PC games in selected
                  markets globally.
                </p>
                <p className="text-secondary mb-0">
                  As passionate gamers who understand players’ needs, we speak to our
                  community regularly to ensure they continue to enjoy the highly engaging
                  experiences they associate with our games.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={5} sm={12}>
            <Card className="shadow-sm border-light p-4 what-card">
              <Card.Img
                variant="top"
                src={image2}
                className="about-card-img mb-3"
              />
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="red-bar me-2"></div>
                  <h4 className="fw-bold mb-0">Community</h4>
                </div>
                <p className="text-secondary mb-3">
                  Garena exclusively operates top-tier mobile and PC games in selected
                  markets globally.
                </p>
                <p className="text-secondary mb-0">
                  As passionate gamers who understand players’ needs, we speak to our
                  community regularly to ensure they continue to enjoy the highly engaging
                  experiences they associate with our games.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
