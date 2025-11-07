import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import React, { useState } from "react";
import "./Customer.css";
import Img1 from "../../../assets/Home image/product-01-2.webp";
import hoverImg1 from "../../../assets/Home image/product-01-1.webp";
import Img2 from "../../../assets/Home image/product-12-1.webp";
import hoverImg2 from "../../../assets/Home image/product-12-4.webp";
import Img3 from "../../../assets/Home image/product-04-3.webp";
import hoverImg3 from "../../../assets/Home image/product-03-1.webp";
import Img4 from "../../../assets/Home image/product-06-1.webp";
import hoverImg4 from "../../../assets/Home image/product-06-2.webp";
import Img5 from "../../../assets/Home image/product-03-3.webp";
import hoverImg5 from "../../../assets/Home image/product-03-1.webp";
import Img6 from "../../../assets/Home image/product-05-1.webp";
import hoverImg6 from "../../../assets/Home image/product-05-2.jpg";
import Img7 from "../../../assets/Home image/banner-21.webp";
import { BsEye, BsCart, BsHeart, BsChatDots } from "react-icons/bs";
const products = [
  {
    id: 1,
    name: "Shield Conditioner",
    price: "$27.00",
    image: Img1,
    hoverImage: hoverImg1,
    tag: "New",
  },
  {
    id: 2,
    name: "Natural Coconut Cleansing Oil",
    price: "$21.00",
    image: Img2,
    hoverImage: hoverImg2,
  },
  {
    id: 3,
    name: "Shield Shampoo",
    price: "$39.00",
    oldPrice: "$60.00",
    image: Img3,
    hoverImage: hoverImg3,
    tag: "Sale",
  },
  {
    id: 4,
    name: "Enriched Duo",
    price: "$27.00",
    image: Img4,
    hoverImage: hoverImg4,
  },
  {
    id: 5,
    name: "Enriched Hand & Body Wash",
    price: "$23.00",
    image: Img5,
    hoverImage: hoverImg5,
    tag: "New",
  },
  {
    id: 6,
    name: "Enriched Hand Wash",
    price: "$25.00",
    oldPrice: "$85.00",
    image: Img6,
    hoverImage: hoverImg6,
    tag: "Sale",
  },
];
const Customer = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <Container className="customer-section">
      <h1 className="text-center">Customer favorite beauty essentials</h1>
      <p className="text-center fs-5 mt-4 mb-5">
        Made using clean, non-toxic ingredients, our products are designed for
        everyone.
      </p>
      <Row>
        <Col md={5} className="text-center image-text-section">
          <img src={Img7} alt="Model Face" className="promo-image" />
          <div className="promo-text">
            <h2>Empower Yourself</h2>
            <p>Get the skin you want to feel</p>
            <Button variant="light" className="btn button border-0 fs-5">
              Explore More
            </Button>
          </div>
        </Col>
        <Col md={7}>
          <Row>
            {products.map((product) => (
              <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                <Card
                  className="product-card text-center"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="position-relative overflow-hidden">
                    {product.tag && (
                      <Badge
                        bg={product.tag === "Sale" ? "success" : "danger"}
                        className="product-badge"
                      >
                        {product.tag}
                      </Badge>
                    )}
                    <Card.Img 
                      variant="top" 
                      src={hoveredProduct === product.id ? product.hoverImage : product.image} 
                      className="hover-image w-100" 
                    />

                    <div
                      className={`hover-overlay d-flex flex-column justify-content-center align-items-center ${
                        hoveredProduct === product.id ? "show" : ""
                      }`}
                    >
                      <div className="d-flex align-items-center btn-class gap-2">
                        <button className="btn btn-dark gap-2 button1">
                          <BsCart size={16} />
                        </button>
                        <button className="btn btn-outline-light gap-2 button2">
                          <BsEye size={16} />
                        </button>
                        <button className="btn btn-dark gap-2 button3">
                          <BsHeart size={16} />
                        </button>
                        <button className="btn btn-outline-light gap-2 button4">
                          <BsChatDots size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Text className="product-price">
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-1">
                          {product.oldPrice}
                        </span>
                      )}
                      {product.price}
                    </Card.Text>
                    <Card.Title>{product.name}</Card.Title>
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
export default Customer;
