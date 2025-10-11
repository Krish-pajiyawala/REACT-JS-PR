import React from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import './Product.css';

const products = [
  { id: 1, name: "Enriched Duo", price: 27, img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-1.jpg?v=1736500658" },
  { id: 2, name: "Enriched Hand & Body Wash", price: 23, img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-3.jpg?v=1736500607", tag: "New" },
  { id: 3, name: "Enriched Hand Wash", price: 25, oldPrice: 35, img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-05-1.jpg?v=1736500614", tag: "Sale" },
  { id: 4, name: "Moisturizing Polishing Treatment", price: 45, oldPrice: 75, img: "https://via.placeholder.com/300x300", tag: "Sale" },
  { id: 5, name: "Natural Coconut Cleansing Oil", price: 21, img: "https://via.placeholder.com/300x300" },
  { id: 6, name: "Nourishing Eye Cream", price: 19, img: "https://via.placeholder.com/300x300" },
  { id: 7, name: "Nourishing Moisture Mask", price: 35, img: "https://via.placeholder.com/300x300" },
  { id: 8, name: "Perfecting Facial Oil", price: 15, oldPrice: 21, img: "https://via.placeholder.com/300x300", tag: "Sale" },
];

const Product = () => {
  return (
    <Container fluid className="py-4">
      <Row>
        {/* Sidebar */}
        <Col md={3} lg={2} className="border-end pe-4">
          <h5>Availability</h5>
          <Form.Check label="In Stock (16)" />
          <hr />

          <h5>Price</h5>
          <Form.Range min="0" max="100" />
          <p>Price from $0 to $100</p>
          <hr />

          <h5>Color</h5>
          <ul className="list-unstyled d-flex flex-wrap">
            {["black", "blue", "green", "red", "yellow", "white"].map(color => (
              <li key={color} className="me-2 mb-2">
                <div className="color-circle" style={{ backgroundColor: color }}></div>
              </li>
            ))}
          </ul>
          <hr />

          <h5>Size</h5>
          {["Small", "Medium", "Large"].map(size => (
            <Form.Check key={size} label={size} />
          ))}
        </Col>

        {/* Product Grid */}
        <Col md={9} lg={10}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Products</h3>
            <Form.Select style={{ width: "200px" }}>
              <option>Alphabetically, A-Z</option>
              <option>Price, Low to High</option>
              <option>Price, High to Low</option>
            </Form.Select>
          </div>

          {/* 4 Cards per Row */}
          <Row>
            {products.map(item => (
              <Col key={item.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                <Card className="shadow-sm product-card position-relative">
                  {item.tag && <span className={`tag ${item.tag.toLowerCase()}`}>{item.tag}</span>}
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-semibold fs-6">{item.name}</Card.Title>
                    <div>
                      {item.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="fw-bold">${item.price.toFixed(2)}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
