import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./FAQ.css";

const FAQSection = () => {
  return (
  <>
    <section className="faq-section text-center py-5">
        <h2 className="fw-semibold mb-4">Frequently Asked Questions</h2>

        <div className="faq-image-container">
          <img
            src="https://glowing-theme.myshopify.com/cdn/shop/files/banner-35.jpg?v=1736741145"
            alt="FAQ"
            className="faq-image"
          />

        </div>
    </section>

    <Container
      fluid="md"
      className="py-5"
      style={{
        maxWidth: "1200px",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        color: "#000",
      }}
    >
      <Row className="g-5 mb-5">
        <Col
          md={4}
          className="d-flex align-items-start justify-content-start"
          style={{ paddingLeft: "40px" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              lineHeight: "1.2",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Orders & <br /> Shipping
          </h1>
        </Col>

        <Col md={8} style={{ paddingRight: "40px" }}>
          <Accordion flush >
            <Accordion.Item eventKey="0" className="mb-4">
              <Accordion.Header >How did my package ship?</Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-4">
              <Accordion.Header>
                Why does my USPS tracking number state 1-Day, 2-Day, 3-Day
                Delivery?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-4">
              <Accordion.Header>
                How long will my package take to arrive?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="mb-4">
              <Accordion.Header>What are business days?</Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mb-4">
              <Accordion.Header>
                How do I know my package has shipped?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="mb-4">
              <Accordion.Header>
                Why are certain products unavailable to ship internationally?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6" className="mb-4">
              <Accordion.Header>
                Why is my tracking number not updating?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="g-5 mb-5">
        <Col
          md={4}
          className="d-flex align-items-start justify-content-start"
          style={{ paddingLeft: "40px" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              lineHeight: "1.2",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Returns & <br /> Exchanges
          </h1>
        </Col>

        <Col md={8} style={{ paddingRight: "40px" }}>
          <Accordion flush >
            <Accordion.Item eventKey="0" className="mb-4">
              <Accordion.Header>
                How do I know my package has shipped?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-4">
              <Accordion.Header>
                Why are certain products unavailable to ship internationally?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-4">
              <Accordion.Header>
                Why is my tracking number not updating?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row className="g-5">
        <Col
          md={4}
          className="d-flex align-items-start justify-content-start"
          style={{ paddingLeft: "40px" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "600",
              lineHeight: "1.2",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Discounts
          </h1>
        </Col>

        <Col md={8} style={{ paddingRight: "40px" }}>
          <Accordion flush >
            <Accordion.Item eventKey="0" className="mb-4" >
              <Accordion.Header>
                How do I know my package has shipped?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-4">
              <Accordion.Header>
                Why are certain products unavailable to ship internationally?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-4">
              <Accordion.Header>
                Why is my tracking number not updating?
              </Accordion.Header>
              <Accordion.Body style={{ color: "#555", fontSize: "0.95rem" }}>
                Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients.
                Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin.

                Say hello to flawless, long-lasting foundation that comes in 7 melt-into-your-skin shades. This lightweight, innovative formula creates a smooth, natural matte finish that won’t settle into lines. It’s the perfect fit for your skin. 1 fl. oz.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default FAQSection;
