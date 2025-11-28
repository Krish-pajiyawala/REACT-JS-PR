import React, { useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addproduct } from "../Services/Action/AddProductAction";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    title: "",
    category: "",
    subcategory: "",
    brand: "",
    price: "",
    discount: "",
    stock: "",
    description: "",
    image: ["", "", "", ""],
    rates: {
      rating: "",
      rests: "",
    },
  };

  const [inputform, setinputform] = useState(initialState);
  const [inputErr, setinputErr] = useState({});

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (name === "image" && index !== null) {
      const newImages = [...inputform.image];
      newImages[index] = value;
      setinputform({ ...inputform, image: newImages });
    } else if (name === "rating" || name === "rests") {
      setinputform({
        ...inputform,
        rates: { ...inputform.rates, [name]: value },
      });
    } else {
      setinputform({ ...inputform, [name]: value });
    }
  };

  const handleErrors = () => {
    const errors = {};

    if (!inputform.title.trim()) errors.titleErr = "Enter Product Name";
    if (!inputform.category) errors.categoryErr = "Please select category";
    if (!inputform.subcategory) errors.subcategoryErr = "Please select subcategory";
    if (!inputform.brand) errors.brandErr = "Please select brand";
    if (!inputform.price || inputform.price <= 0) errors.priceErr = "Enter valid price";
    if (!inputform.discount || inputform.discount < 0)
      errors.discountErr = "Enter valid discount";
    if (!inputform.stock || inputform.stock <= 0) errors.stockErr = "Enter Stock";
    if (inputform.image.some((img) => !img.trim()))
      errors.imageErr = "Provide all Image URLs";
    if (!inputform.description.trim()) errors.descriptionErr = "Describe the Product";
    if (!inputform.rates.rating) errors.ratingErr = "Enter Rating";
    if (!inputform.rates.rests) errors.restsErr = "Enter Number of Reviews";

    setinputErr(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (handleErrors()) {
      inputform.id =
        "PR" +
        generateUniqueId({
          length: 10,
          useLetters: false,
        });

      dispatch(addproduct(inputform));
      setinputform(initialState);
      navigate("/");
    }
  };

  const handleCancel = () => {
    // Reset form and navigate back
    setinputform(initialState);
    setinputErr({});
    navigate("/");
  };

  const getBrandOptions = () => {
    switch (inputform.category) {
      case "men":
        return ["Louis Philippe", "Allen Solly", "Park Avenue", "Peter England", "H&M", "Roadster"];
      case "women":
        return ["Zara", "H&M", "Forever 21", "Mango", "Vero Moda", "Only"];
      case "kids":
        return ["Gap Kids", "Carter's", "Mini Club", "H&M Kids", "Zara Kids"];
      default:
        return [];
    }
  };

  const getsubCatagory = () => {
    switch (inputform.category) {
      case "men":
        return ["Jeans", "T-Shirt", "Kurta", "Shirts", "Casual Shoes", "Formal Shoes"];
      case "women":
        return ["Top", "Leggings", "Saree", "Dresses", "Kurtas", "Handbags"];
      case "kids":
        return ["Shirt", "Shorts", "Frock", "T-Shirts", "Dresses", "Footwear"];
      default:
        return [];
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center py-4"
      style={{ backgroundColor: "#f5f5f6", minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={10} lg={8}>
          <Card
            className="border-0 shadow-sm rounded-0 add-product-card"
            style={{
              background: "#ffffff",
            }}
          >
            <Card.Body className="p-5">
              {/* Header similar to Myntra */}
              <div className="text-center mb-4 border-bottom pb-3">
                <h2 className="fw-bold mb-2" style={{ 
                  letterSpacing: "1px", 
                  color: "#ff3f6c",
                  fontSize: "28px"
                }}>
                  ADD NEW PRODUCT
                </h2>
                <p className="text-muted m-0" style={{ fontSize: "14px", fontWeight: "500" }}>
                  Fill in the product details to add to your collection
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* TITLE + CATEGORY */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        PRODUCT TITLE <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={inputform.title}
                        onChange={handleChange}
                        placeholder="eg. Slim Fit Blue Denim Jeans"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.titleErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.titleErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        CATEGORY <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Select
                        name="category"
                        value={inputform.category}
                        onChange={handleChange}
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      >
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                      </Form.Select>
                      {inputErr.categoryErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.categoryErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* SUBCATEGORY + BRAND */}
                {inputform.category && (
                  <Row className="mb-4">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                          SUBCATEGORY <span style={{ color: "#ff3f6c" }}>*</span>
                        </Form.Label>
                        <Form.Select
                          name="subcategory"
                          value={inputform.subcategory}
                          onChange={handleChange}
                          className="myntra-input"
                          style={{ fontSize: "14px" }}
                        >
                          <option value="">Select Subcategory</option>
                          {getsubCatagory().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.subcategoryErr && (
                          <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.subcategoryErr}</small>
                        )}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                          BRAND <span style={{ color: "#ff3f6c" }}>*</span>
                        </Form.Label>
                        <Form.Select
                          name="brand"
                          value={inputform.brand}
                          onChange={handleChange}
                          className="myntra-input"
                          style={{ fontSize: "14px" }}
                        >
                          <option value="">Select Brand</option>
                          {getBrandOptions().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.brandErr && (
                          <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.brandErr}</small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {/* PRICE + STOCK + DISCOUNT */}
                <Row className="mb-4">
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        PRICE (₹) <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={inputform.price}
                        onChange={handleChange}
                        placeholder="499"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.priceErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.priceErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        DISCOUNT (%)
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="discount"
                        value={inputform.discount}
                        onChange={handleChange}
                        placeholder="10"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.discountErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.discountErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        STOCK <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="stock"
                        value={inputform.stock}
                        onChange={handleChange}
                        placeholder="20"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.stockErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.stockErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* IMAGES */}
                <div className="mb-4">
                  <Form.Label className="fw-semibold mb-3" style={{ color: "#282c3f", fontSize: "14px" }}>
                    PRODUCT IMAGES <span style={{ color: "#ff3f6c" }}>*</span>
                  </Form.Label>
                  <Row>
                    {inputform.image.map((img, index) => (
                      <Col md={6} key={index} className="mb-3">
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="image"
                            value={img}
                            onChange={(e) => handleChange(e, index)}
                            placeholder={`Enter Image ${index + 1} URL`}
                            className="myntra-input"
                            style={{ fontSize: "14px" }}
                          />
                        </Form.Group>
                      </Col>
                    ))}

                    {inputErr.imageErr && (
                      <Col md={12}>
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.imageErr}</small>
                      </Col>
                    )}
                  </Row>
                </div>

                {/* RATING + REVIEWS */}
                <Row className="mb-4">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        RATING <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="rating"
                        value={inputform.rates.rating}
                        onChange={handleChange}
                        placeholder="4.5"
                        step="0.1"
                        min="0"
                        max="5"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.ratingErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.ratingErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                        REVIEWS COUNT <span style={{ color: "#ff3f6c" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="rests"
                        value={inputform.rates.rests}
                        onChange={handleChange}
                        placeholder="120"
                        className="myntra-input"
                        style={{ fontSize: "14px" }}
                      />
                      {inputErr.restsErr && (
                        <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.restsErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* DESCRIPTION */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold" style={{ color: "#282c3f", fontSize: "14px" }}>
                    PRODUCT DESCRIPTION <span style={{ color: "#ff3f6c" }}>*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={inputform.description}
                    onChange={handleChange}
                    placeholder="Describe the product features, material, sizing information, and other important details..."
                    className="myntra-input"
                    style={{ fontSize: "14px", resize: "none" }}
                  />
                  {inputErr.descriptionErr && (
                    <small className="text-danger" style={{ fontSize: "12px" }}>{inputErr.descriptionErr}</small>
                  )}
                </Form.Group>

                {/* BUTTONS */}
                <div className="text-center pt-3">
                  <Row className="justify-content-center">
                    <Col md={8}>
                      <Row className="g-3">
                        <Col md={6}>
                          <Button 
                            type="button" 
                            className="myntra-cancel-btn w-100 py-2 fw-semibold"
                            onClick={handleCancel}
                          >
                            CANCEL
                          </Button>
                        </Col>
                        <Col md={6}>
                          <Button 
                            type="submit" 
                            className="myntra-btn w-100 py-2 fw-semibold"
                          >
                            ADD PRODUCT
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;