import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import './LeftSlider.css';
import { TfiMenuAlt } from 'react-icons/tfi';

const products = [
  {
    id: 1,
    name: "Enriched Duo",
    price: 27,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-1.jpg?v=1736500658",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-06-2.jpg?v=1736500658"
  },
  {
    id: 2,
    name: "Enriched Hand & Body Wash",
    price: 23,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-3.jpg?v=1736500607",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-03-1.jpg?v=1736500607",
    tag: "New"
  },
  {
    id: 3,
    name: "Enriched Hand Wash",
    price: 25,
    oldPrice: 35,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-05-1.jpg?v=1736500614",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-05-2.jpg?v=1736500614",
    tag: "Sale"
  },
  {
    id: 4,
    name: "Moisturizing Polishing Treatment",
    price: 45,
    oldPrice: 75,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-10-1.jpg?v=1736500664&width=533",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-10-3.jpg?v=1736500664&width=533",
    tag: "Sale"
  },
  {
    id: 5,
    name: "Natural Coconut Cleansing Oil",
    price: 21,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-12-1.jpg?v=1736500688",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-12-4.jpg?v=1736500688"
  },
  {
    id: 6,
    name: "Nourishing Eye Cream",
    price: 19,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-08-1.jpg?v=1736500681&width=533",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-08-2.jpg?v=1736500681&width=533"
  },
  {
    id: 7,
    name: "Nourishing Moisture Mask",
    price: 35,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-09-1.jpg?v=1736500640",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-09-2.jpg?v=1736500640"
  },
  {
    id: 8,
    name: "Perfecting Facial Oil",
    price: 15,
    oldPrice: 21,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-02-1.jpg?v=1736500620",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-02-2.jpg?v=1736500620",
    tag: "Sale"
  },
  {
    id: 9,
    name: "Scalp Moisturizing Cream",
    price: 29.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-11-1.jpg?v=1736500652",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-11-2.jpg?v=1736500652"
  },
  {
    id: 10,
    name: "Shield Conditioner",
    price: 27.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-01-2.jpg?v=1736500601",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-01-1.jpg?v=1736500601",
    tag: "New"
  },
  {
    id: 11,
    name: "Shield Shampoo",
    price: 39.00,
    oldPrice: 60.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-04-3.jpg?v=1736500674&width=533",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-04-1.jpg?v=1736500674&width=533",
    tag: "Sale"
  },
  {
    id: 12,
    name: "Shield Spray",
    price: 37.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-07-1.jpg?v=1736500635",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-07-2.jpg?v=1736500635"
  },
  {
    id: 13,
    name: "Sideway Travel Case Set",
    price: 19.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-15-1.jpg?v=1736500669&width=533",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-15-2.jpg?v=1736500669&width=533"
  },
  {
    id: 14,
    name: "Untangling Comb",
    price: 110.00,
    oldPrice: 130.00,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-16-1.jpg?v=1736500625",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-16-2.jpg?v=1736500625",
    tag: "Sale"
  },
  {
    id: 15,
    name: "Vacation Travel Case Set",
    price: 43,
    oldPrice: 85,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-14-1.jpg?v=1736843099",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-14-2.jpg?v=1736843099",
    tag: "Sale"
  },
  {
    id: 16,
    name: "Vaulted Mirror",
    price: 17,
    oldPrice: 22,
    img: "https://glowing-theme.myshopify.com/cdn/shop/files/product-13-1.jpg?v=1736500630",
    hoverImg: "https://glowing-theme.myshopify.com/cdn/shop/files/product-13-3.jpg?v=1736500630",
    tag: "Sale"
  }

];

const LeftSlider = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [price, setPrice] = useState();

  const colors = ["black", "blue", "brown", "gold", "gray", "green", "magenta", "navy", "pink", "purple", "red", "sky", "white", "yellow"];
  const sizes = ["Sm", "Small", "Md", "Medium", "Lg", "Large", "XL"];

  return (
    <>
      <div className='currant-page w-100 py-2'>
        <p className='text-center mb-0'>Home - <span className='fw-medium'>Products</span></p>
      </div>

      <Container fluid className="py-5">
        <Row className="align-items-start">
          <h3 className='fw-bold text-center fs-2 mb-4'>Products</h3>

          {/* Sidebar */}
          <Col md={3} lg={2} className="sidebar p-3">
            <div className="filter-section">
              <h6 className="filter-title">Availability</h6>
              <Form.Check label="In Stock (16)" />
            </div>
            <hr />

            <div className="filter-section">
              <h6 className="filter-title">Price</h6>
              <Form.Range
                min={0}
                max={110}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <p className="price-text">Price from $0 to ${price}</p>
            </div>
            <hr />

            <div className="filter-section">
              <h6 className="filter-title">Color</h6>
              <ul className="list-unstyled color-list">
                {colors.map((color) => (
                  <li key={color} className="d-flex align-items-center mb-2">
                    <div className="color-circle me-2" style={{ backgroundColor: color }}></div>
                    <span className="text-capitalize">{color}</span>
                  </li>
                ))}
              </ul>
            </div>
            <hr />

            <div className="filter-section">
              <h6 className="filter-title">Size</h6>
              {sizes.map((size) => (
                <Form.Check key={size} label={size} />
              ))}
            </div>
          </Col>

          {/* Product Grid */}
          <Col md={9} lg={10}>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <p className="text-secondary mb-0">
                We found <b className="text-black">{products.length}</b> products available for you.
              </p>

              <div className="d-flex align-items-center gap-2">
                <TfiMenuAlt size={20} className="text-secondary" />
                <Form.Select style={{ width: "200px" }}>
                  <option>Alphabetically, A-Z</option>
                  <option>Price, Low to High</option>
                  <option>Price, High to Low</option>
                </Form.Select>
              </div>
              </div>


          <Row>
            {products.map((item) => (
              <Col key={item.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                <Card
                  className="shadow-sm product-card position-relative"
                  onMouseEnter={() => setHoveredProduct(item.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {item.tag && (
                    <span className={`tag ${item.tag.toLowerCase()}`}>
                      {item.tag}
                    </span>
                  )}

                  <div className="overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={hoveredProduct === item.id && item.hoverImg ? item.hoverImg : item.img}
                      alt={item.name}
                    />
                  </div>

                  <Card.Body className="text-center">
                    <div>
                      {item.oldPrice && (
                        <span className="text-muted text-decoration-line-through me-2">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="fw-bold">${item.price.toFixed(2)}</span>
                    </div>
                    <Card.Title className="fw-semibold fs-6">{item.name}</Card.Title>
                  </Card.Body>

                  {/* Hover Icons */}
                  <div className="hover-actions">
                    <button><FaRegEye /></button>
                    <button><FaRegHeart /></button>
                    <button><BiGitCompare /></button>
                  </div>

                  {/* Bottom Add to Cart */}
                  <div className="bottom-btn">Add to Cart</div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container >
    </>
  );
};

export default LeftSlider;
