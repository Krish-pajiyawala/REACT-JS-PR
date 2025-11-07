import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import {
    FaMinus,
    FaPlus,
    FaRegHeart,
    FaShareAlt,
    FaExchangeAlt,
    FaEye,
    FaStar
} from "react-icons/fa";

import visa from "../../assets/Singal image/Visa.svg";
import master from "../../assets/Singal image/mastercard.svg";
import amex from "../../assets/Singal image/amex.svg";
import paypal from "../../assets/Singal image/paypal.svg";
import diners from '../../assets/Singal image/diners.svg'
import discover from "../../assets/Singal image/discover.svg";

import img1 from "../../assets/Singal image/img-1.jpg";
import img2 from "../../assets/Singal image/img-2.jpg";
import img3 from "../../assets/Singal image/img-3.jpg";

import imgpr1 from '../../assets/Singal image/pr-1.jpg'
import imgpr2 from '../../assets/Singal image/pr-2.jpg'
import imgpr3 from '../../assets/Singal image/pr-3.jpg'
import imgpr4 from '../../assets/Singal image/pr-4.jpg'

import imgprh1 from '../../assets/Singal image/pr-h-1.jpg'
import imgprh2 from '../../assets/Singal image/pr-h-2.jpg'
import imgprh3 from '../../assets/Singal image/pr-h-3.jpg'
import imgprh4 from '../../assets/Singal image/pr-h-4.jpg'

import "./Product.css";


const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const products = [
        {
            id: 1,
            title: "Vaulted Mirror",
            img: `${imgpr1}`,
            hoverImg: `${imgprh1}`,
            Price: "$22.00",
            sale: true,
        },
        {
            id: 2,
            title: "Enriched Hand Wash",
            img: `${imgpr2}`,
            hoverImg: `${imgprh2}`,
            Price: "$85.00",
            sale: true,
        },
        {
            id: 3,
            title: "Nourishing Eye Cream",
            img: `${imgpr3}`,
            hoverImg: `${imgprh3}`,
            Price: "$30.00",
            sale: false,
        },
        {
            id: 4,
            title: "Shield Spray",
            img: `${imgpr4}`,
            hoverImg: `${imgprh4}`,
            Price: "$37.00",
            sale: false,
        },
    ];


    return (
        <Container className="my-5 product-page">
            <Row className="gy-4">
                <Col md={6} className="text-center">
                    <img
                        src={img1}
                        alt="Product"
                        className="img-fluid main-img mb-3"
                    />
                    <div className="d-flex justify-content-center gap-3">
                        <img src={img1} alt="thumb1" className="thumb-img" />
                        <img src={img2} alt="thumb2" className="thumb-img" />
                        <img src={img3} alt="thumb3" className="thumb-img" />
                    </div>
                </Col>
                <Col md={6}>
                    <p className="price mb-1">$23.00 <span className="new-tag">New</span></p>
                    <h3 className="fw-bold mb-3">Enriched Hand & Body Wash</h3>

                    <div className="mb-3">
                        <strong>Size:</strong>
                        <div className="d-flex gap-2 mt-2">
                            {["Md", "Lg", "Xl"].map((size) => (
                                <Button
                                    key={size}
                                    variant={size === "Md" ? "dark" : "outline-dark"}
                                    className="size-btn"
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-3">
                        <strong>Color:</strong>
                        <div className="d-flex gap-2 mt-2">
                            <div className="color-circle bg-pink"></div>
                            <div className="color-circle bg-navy"></div>
                            <div className="color-circle bg-darkblue"></div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <Button
                            variant="outline-dark"
                            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                        >
                            <FaMinus />
                        </Button>
                        <Form.Control
                            type="text"
                            value={quantity}
                            readOnly
                            className="qty-box mx-2 text-center"
                        />
                        <Button variant="outline-dark" onClick={() => setQuantity(quantity + 1)}>
                            <FaPlus />
                        </Button>
                    </div>

                    <div className="d-flex gap-3 mb-4">
                        <Button variant="light" className="flex-grow-1 border">
                            Add to cart
                        </Button>
                        <Button variant="dark" className="flex-grow-1">
                            Buy it now
                        </Button>
                    </div>

                    <div className="d-flex gap-3 mb-3">
                        <span><FaExchangeAlt /> Compare</span>
                        <span><FaRegHeart /> Add To Wishlist</span>
                        <span><FaShareAlt /> Share</span>
                    </div>

                    <p className="small mb-1">
                        <strong>Estimated Delivery:</strong> October 13 - October 17
                    </p>
                    <p className="small mb-3">
                        <strong>Free Shipping & Returns:</strong> On all orders over $75
                    </p>

                    <div className="payment-box p-3 rounded mb-3">
                        <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
                            <img src={visa} alt="Visa" width="40" />
                            <img src={master} alt="MasterCard" width="40" />
                            <img src={amex} alt="Amex" width="40" />
                            <img src={paypal} alt="PayPal" width="40" />
                            <img src={diners} alt="Diners" width="40" />
                            <img src={discover} alt="Discover" width="40" />
                        </div>
                        <p className="small text-muted mb-0">
                            Guarantee safe & secure checkout
                        </p>
                    </div>

                    <p className="small mb-1">
                        <strong>Vendor:</strong> Vendor 2
                    </p>
                    <p className="small mb-1">
                        <strong>Collections:</strong> Beauty & Cosmetics, Bestseller, Skincare, Haircare
                    </p>
                    <p className="small">
                        <strong>SKU:</strong> 1112
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={12}>
                    <div className="tabs-header d-flex justify-content-center mb-4">
                        <h4
                            className={`tab-title ${activeTab === "description" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("description")}
                        >
                            Description
                        </h4>
                        <h4
                            className={`tab-title ${activeTab === "shipping" ? "active" : ""
                                }`}
                            onClick={() => setActiveTab("shipping")}
                        >
                            Shipping & Return
                        </h4>
                    </div>

                    <div className="tab-content text-start">
                        {activeTab === "description" && (
                            <>
                                <h6 className="fw-semibold mb-3">
                                    For Normal, Oily, Combination Skin Types
                                </h6>
                                <p>
                                    Complexion-perfecting natural foundation enriched with
                                    antioxidant-packed superfruits, vitamins, and other
                                    skin-nourishing nutrients. Creamy liquid formula sets with a
                                    pristine matte finish for soft, velvety smooth skin. Say hello
                                    to flawless, long-lasting foundation that comes in 7
                                    melt-into-your-skin shades. This lightweight, innovative
                                    formula creates a smooth, natural matte finish that won’t
                                    settle into lines. It’s the perfect fit for your skin. 1 fl.
                                    oz.
                                </p>
                                <p>
                                    This natural and vegan body scrub tackles cellulite and stretch
                                    marks too, thanks to exfoliating coffee grinds and nourishing
                                    macadamia oil. Use me 2–3 times a week and watch skin shine
                                    brighter than Bondi beach.
                                </p>

                                <h6 className="fw-semibold mt-4">Benefits</h6>
                                <ul>
                                    <li>Buildable medium-to-full coverage</li>
                                    <li>Weightless, airy feel—no caking!</li>
                                    <li>Long-wearing</li>
                                    <li>Evens skin tone</li>
                                    <li>
                                        Available in 07 shades (all exclusive to Makeaholic!)
                                    </li>
                                </ul>
                            </>
                        )}

                        {activeTab === "shipping" && (
                            <>
                                <p>
                                    We typically process and ship orders within 1 week, with shipping costs calculated at checkout based on your location and selected method. Free shipping is available for orders over $50, depending on the promotion. Once your order ships, you will receive a confirmation email with a tracking number to monitor your package’s status. Standard shipping usually takes 5-7 business days, while express options are available for faster delivery. If you need to change your shipping address after placing an order, please contact us as soon as possible. In case of lost or stolen packages, we recommend reaching out to the carrier first, but our support team is happy to assist. For returns, we accept items within 1 week, provided they are unused and in their original packaging. Refunds are processed within 3-5 business days after we receive and inspect the returned item. Exchanges are also available if you need a different size or variant of a product. If you have any questions about shipping or returns, feel free to contact our support team.
                                </p>
                            </>
                        )}
                    </div>
                </Col>
            </Row>

            <Container className="related-products my-5 text-center">
                <h3 className="section-title mb-4">You May Also Like</h3>
                <Row className="justify-content-center g-4">
                    {products.map((product) => (
                        <Col key={product.id} xs={10} sm={6} md={4} lg={3}>
                            <Card className="product-card border-0 bg-transparent">
                                <div className="product-img-wrapper position-relative">
                                    {product.sale && (
                                        <span className="sale-badge position-absolute top-0 start-0 m-2">
                                            SALE
                                        </span>
                                    )}

                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="product-img main-img w-100"
                                    />
                                    <img
                                        src={product.hoverImg}
                                        alt={product.title}
                                        className="product-img hover-img w-100 position-absolute top-0 start-0"
                                    />

                                    <div className="action-icons position-absolute top-50 start-50 translate-middle d-flex gap-2">
                                        <button className="action-btn"><FaEye /></button>
                                        <button className="action-btn"><FaStar /></button>
                                        <button className="action-btn"><FaExchangeAlt /></button>
                                    </div>
                                </div>

                                <Card.Body className="p-0 mt-3">
                                    <Card.Title className="product-title">{product.title}</Card.Title>
                                    <div className="price-section">
                                        <span className="new-price">{product.Price}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container >
    );
};

export default SingleProduct;
