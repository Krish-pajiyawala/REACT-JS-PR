import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import shopImg1 from "../../../assets/img/home/Shop/img-1.webp";
import shopImg2 from "../../../assets/img/home/Shop/img-2.webp";
import shopImg3 from "../../../assets/img/home/Shop/img-3.webp";
import shopImg4 from "../../../assets/img/home/Shop/img-4.webp";
import shopImg5 from "../../../assets/img/home/Shop/img-5.webp";
import shopImg6 from "../../../assets/img/home/Shop/img-6.webp";
import shopImg7 from "../../../assets/img/home/Shop/img-7.webp";
import shopImg8 from "../../../assets/img/home/Shop/img-8.webp";
import shopImg9 from "../../../assets/img/home/Shop/img-9.webp";
import shopImg10 from "../../../assets/img/home/Shop/img-10.webp";
import shopImg11 from "../../../assets/img/home/Shop/img-11.webp";
import shopImg12 from "../../../assets/img/home/Shop/img-12.webp";
import shopImg13 from "../../../assets/img/home/Shop/img-13.webp";
import shopImg14 from "../../../assets/img/home/Shop/img-14.webp";
import shopImg15 from "../../../assets/img/home/Shop/img-15.webp";
import shopImg16 from "../../../assets/img/home/Shop/img-16.webp";
import shopImg17 from "../../../assets/img/home/Shop/img-17.webp";
import shopImg18 from "../../../assets/img/home/Shop/img-18.webp";
import shopImg19 from "../../../assets/img/home/Shop/img-19.webp";
import shopImg20 from "../../../assets/img/home/Shop/img-20.webp";
import shopImg21 from "../../../assets/img/home/Shop/img-21.webp";
import shopImg22 from "../../../assets/img/home/Shop/img-22.webp";
import shopImg23 from "../../../assets/img/home/Shop/img-23.webp";
import shopImg24 from "../../../assets/img/home/Shop/img-24.webp";
import shopImg25 from "../../../assets/img/home/Shop/img-25.webp";
import shopImg26 from "../../../assets/img/home/Shop/img-26.webp";
import shopImg27 from "../../../assets/img/home/Shop/img-27.webp";
import shopImg28 from "../../../assets/img/home/Shop/img-28.webp";
import shopImg29 from "../../../assets/img/home/Shop/img-29.webp";
import shopImg30 from "../../../assets/img/home/Shop/img-30.webp";
import shopImg31 from "../../../assets/img/home/Shop/img-31.webp";
import shopImg32 from "../../../assets/img/home/Shop/img-32.webp";
import shopImg33 from "../../../assets/img/home/Shop/img-33.webp";

const shopData = [
  { id: 1, img: shopImg1 },
  { id: 2, img: shopImg2 },
  { id: 3, img: shopImg3 },
  { id: 4, img: shopImg4 },
  { id: 5, img: shopImg5 },
  { id: 6, img: shopImg6 },
  { id: 7, img: shopImg7 },
  { id: 8, img: shopImg8 },
  { id: 9, img: shopImg9 },
  { id: 10, img: shopImg10 },
  { id: 11, img: shopImg11 },
  { id: 12, img: shopImg12 },
  { id: 13, img: shopImg13 },
  { id: 14, img: shopImg14 },
  { id: 15, img: shopImg15 },
  { id: 16, img: shopImg16 },
  { id: 17, img: shopImg17 },
  { id: 18, img: shopImg18 },
  { id: 19, img: shopImg19 },
  { id: 20, img: shopImg20 },
  { id: 21, img: shopImg21 },
  { id: 22, img: shopImg22 },
  { id: 23, img: shopImg23 },
  { id: 24, img: shopImg24 },
  { id: 25, img: shopImg25 },
  { id: 26, img: shopImg26 },
  { id: 27, img: shopImg27 },
  { id: 28, img: shopImg28 },
  { id: 29, img: shopImg29 },
  { id: 30, img: shopImg30 },
  { id: 31, img: shopImg31 },
  { id: 32, img: shopImg32 },
  { id: 33, img: shopImg33 },
];

const Shop = () => {
  return (
    <section className="py-5 bg-white">
      <Container fluid>
        <Row className="justify-content-center">
          {shopData.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} xl={2} className="text-center p-0 mb-2">
              <img src={product.img} alt={`Product ${product.id}`} style={{
                width: "100%",
                height: "335px",
                objectFit: "cover",
              }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Shop;
