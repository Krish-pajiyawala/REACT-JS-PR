// ViewProduct.jsx
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Badge, Alert } from "react-bootstrap";
import "./ViewProduct.css";


import { 
  FiTruck, 
  FiCheckCircle, 
  FiShield, 
  FiRefreshCw,
  FiHeart,
  FiShare2,
  FiTag,
  FiStar,
  FiArrowLeft
} from "react-icons/fi";
import { 
  FaRupeeSign, 
  FaRegHeart, 
  FaHeart,
  FaRegStar,
  FaStar as FaSolidStar,
  FaTruck,
  FaShieldAlt,
  FaExchangeAlt
} from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { LiaTrashRestoreSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteproductAsync } from "../Services/Action/addProductAction";

const ViewProduct = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [pincode, setPincode] = useState("");

  const { products } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products && products.find((product) => String(product.id) === String(id));

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <Alert variant="danger" className="mx-auto" style={{ maxWidth: "500px" }}>
          <h4>Product Not Found</h4>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <Button variant="outline-danger" onClick={() => navigate("/")}>
            <FiArrowLeft className="me-2" /> Back to Products
          </Button>
        </Alert>
      </Container>
    );
  }

  const handleImageSelect = (index) => {
    setActiveImageIndex(index);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteproductAsync(id));
      navigate("/");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const calculateDiscountPrice = () => {
    const price = Number(product.price);
    const discount = Number(product.discount || 0);
    return Math.floor(price - (price * discount) / 100);
  };

  const discountPrice = calculateDiscountPrice();
  const rating = product.rates?.rating || 0;
  const reviews = product.rates?.rests || 0;

  // Star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaSolidStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaSolidStar key={i} className="text-warning" style={{ opacity: 0.7 }} />);
      } else {
        stars.push(<FaRegStar key={i} className="text-muted" />);
      }
    }
    return stars;
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <Container fluid className="p-0 bg-light">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-bottom py-2">
        <Container>
          <div className="d-flex align-items-center">
            <Button 
              variant="link" 
              onClick={() => navigate("/")}
              className="text-decoration-none text-dark p-0 me-3"
            >
              <FiArrowLeft size={20} />
            </Button>
            <small className="text-muted">
              Home / {product.category} / {product.brand} / <span className="text-dark">{product.title}</span>
            </small>
          </div>
        </Container>
      </div>

      <Container className="py-4">
        <Row className="g-4">
          {/* Left Column - Product Images */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm mb-3">
              <Card.Body className="p-4">
                {/* Main Image Display */}
                <div className="text-center mb-4">
                  <img
                    src={product.image[activeImageIndex]}
                    alt={product.title}
                    className="img-fluid rounded-3"
                    style={{
                      maxHeight: "500px",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </div>

                {/* Thumbnail Images - Desktop */}
                <div className="d-none d-md-block">
                  <Row className="g-2 justify-content-center">
                    {product.image.map((img, index) => (
                      <Col xs={3} key={index} className="text-center">
                        <div
                          className={`thumbnail-container ${activeImageIndex === index ? 'active' : ''}`}
                          onClick={() => handleImageSelect(index)}
                          style={{
                            cursor: "pointer",
                            padding: "2px",
                            border: activeImageIndex === index ? "2px solid #ff3f6c" : "1px solid #e1e1e1",
                            borderRadius: "8px",
                            transition: "all 0.3s ease"
                          }}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="img-fluid rounded-2"
                            style={{
                              height: "80px",
                              width: "100%",
                              objectFit: "cover"
                            }}
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>

                {/* Mobile Carousel */}
                <div className="d-block d-md-none">
                  <div className="position-relative">
                    <img
                      src={product.image[currentSlide]}
                      alt={product.title}
                      className="img-fluid rounded-3 w-100"
                      style={{ height: "350px", objectFit: "cover" }}
                    />
                    <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-center mb-3">
                      {product.image.map((_, index) => (
                        <div
                          key={index}
                          className={`mx-1 rounded-circle ${currentSlide === index ? 'bg-danger' : 'bg-secondary'}`}
                          style={{
                            width: "8px",
                            height: "8px",
                            cursor: "pointer"
                          }}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Product Actions - Wishlist & Share */}
            <div className="d-flex gap-3">
              <Button
                variant={isWishlisted ? "danger" : "outline-danger"}
                className="flex-grow-1 py-2 d-flex align-items-center justify-content-center gap-2"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                {isWishlisted ? "WISHLISTED" : "WISHLIST"}
              </Button>
              <Button
                variant="outline-dark"
                className="py-2 d-flex align-items-center justify-content-center gap-2"
                style={{ width: "60px" }}
              >
                <FiShare2 /> Share
              </Button>
            </div>
          </Col>

          {/* Right Column - Product Details */}
          <Col lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                {/* Brand & Title */}
                <div className="mb-3">
                  <h4 className="fw-bold text-dark mb-1">{product.brand}</h4>
                  <h5 className="text-secondary mb-3">{product.title}</h5>
                  
                  {/* Rating Badge */}
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="d-flex align-items-center bg-light rounded-pill px-3 py-1">
                      <span className="fw-bold me-1">{rating}</span>
                      <div className="d-flex">
                        {renderStars()}
                      </div>
                      <span className="ms-2 text-muted">({reviews} reviews)</span>
                    </div>
                    <Badge bg="success" className="rounded-pill">
                      <FiCheckCircle className="me-1" /> Verified
                    </Badge>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mb-4 p-3 bg-light rounded-3">
                  <div className="d-flex align-items-center gap-3">
                    <h2 className="fw-bold text-dark mb-0">
                      <FaRupeeSign size={20} className="d-inline" />
                      {discountPrice.toLocaleString()}
                    </h2>
                    <div>
                      <span className="text-decoration-line-through text-muted">
                        <FaRupeeSign size={12} className="d-inline" />
                        {Number(product.price).toLocaleString()}
                      </span>
                      <Badge bg="danger" className="ms-2">
                        {product.discount}% OFF
                      </Badge>
                    </div>
                  </div>
                  <small className="text-success d-block mt-1">
                    <FiTag className="me-1" /> Inclusive of all taxes
                  </small>
                </div>

                {/* Product Description */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-2">Product Description</h6>
                  <p className="text-muted">{product.description}</p>
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="fw-bold mb-0">SELECT SIZE</h6>
                    <Button variant="link" className="text-danger p-0">
                      Size Guide
                    </Button>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "danger" : "outline-dark"}
                        className="rounded-pill px-4 py-2"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Admin Actions */}
                <div className="mb-4 p-3 border rounded-3 bg-light">
                  <h6 className="fw-bold mb-3">Admin Actions</h6>
                  <div className="d-flex gap-3">
                    <Button
                      variant="danger"
                      className="flex-grow-1 py-3 d-flex align-items-center justify-content-center gap-2 fw-bold"
                      onClick={() => handleDelete(product.id)}
                    >
                      <LiaTrashRestoreSolid size={20} />
                      DELETE PRODUCT
                    </Button>
                    <Button
                      variant="dark"
                      className="flex-grow-1 py-3 d-flex align-items-center justify-content-center gap-2 fw-bold"
                      onClick={() => handleEdit(product.id)}
                    >
                      <CiEdit size={20} />
                      EDIT PRODUCT
                    </Button>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="mb-4">
                  <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
                    <FiTruck /> DELIVERY OPTIONS
                  </h6>
                  <div className="position-relative mb-2">
                    <Form.Control
                      placeholder="Enter delivery pincode"
                      className="py-3 ps-4"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                    <Button
                      variant="danger"
                      className="position-absolute end-0 top-0 h-100 rounded-end"
                      style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                    >
                      CHECK
                    </Button>
                  </div>
                  <small className="text-muted">
                    Please enter PIN code to check delivery time & Pay on Delivery availability
                  </small>
                </div>

                {/* Trust Badges */}
                <div className="border-top pt-4">
                  <Row className="g-3">
                    <Col xs={6} md={4}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded-circle p-2">
                          <FaTruck className="text-danger" />
                        </div>
                        <div>
                          <small className="fw-bold d-block">Free Shipping</small>
                          <small className="text-muted">Above ₹999</small>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded-circle p-2">
                          <FaExchangeAlt className="text-danger" />
                        </div>
                        <div>
                          <small className="fw-bold d-block">Easy Returns</small>
                          <small className="text-muted">15 Days Return</small>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6} md={4}>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded-circle p-2">
                          <FaShieldAlt className="text-danger" />
                        </div>
                        <div>
                          <small className="fw-bold d-block">Secure Payment</small>
                          <small className="text-muted">100% Secure</small>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ViewProduct;