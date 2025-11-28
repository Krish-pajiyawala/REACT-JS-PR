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

  const getBrandOptions = () => {
    switch (inputform.category) {
      case "men":
        return ["Louis Philippe", "Allen Solly", "Park Avenue", "Peter England"];
      case "women":
        return ["Zara", "H&M", "Forever 21"];
      case "kids":
        return ["Gap Kids", "Carter's", "Mini Club"];
      default:
        return [];
    }
  };

  const getsubCatagory = () => {
    switch (inputform.category) {
      case "men":
        return ["Jeans", "T-Shirt", "Kurta"];
      case "women":
        return ["Top", "Leggings", "Saree"];
      case "kids":
        return ["Shirt", "Shorts", "Frock"];
      default:
        return [];
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center py-5"
      style={{ backgroundColor: "#eef1f7", minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <Card
            className="border-0 shadow-lg rounded-4 add-product-card"
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.85)",
            }}
          >
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h2 className="fw-bold" style={{ letterSpacing: ".5px" }}>
                  🛍️ Add New Product
                </h2>
                <p className="text-muted m-0" style={{ fontSize: "14px" }}>
                  Fill details to add a new item to your store
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* TITLE + CATEGORY */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Product Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={inputform.title}
                        onChange={handleChange}
                        placeholder="eg. Blue Denim Jeans"
                        className="custom-input"
                      />
                      {inputErr.titleErr && (
                        <small className="text-danger">{inputErr.titleErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={inputform.category}
                        onChange={handleChange}
                        className="custom-input"
                      >
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                      </Form.Select>
                      {inputErr.categoryErr && (
                        <small className="text-danger">{inputErr.categoryErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* SUBCATEGORY + BRAND */}
                {inputform.category && (
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Subcategory</Form.Label>
                        <Form.Select
                          name="subcategory"
                          value={inputform.subcategory}
                          onChange={handleChange}
                          className="custom-input"
                        >
                          <option value="">Select Subcategory</option>
                          {getsubCatagory().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.subcategoryErr && (
                          <small className="text-danger">{inputErr.subcategoryErr}</small>
                        )}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Brand</Form.Label>
                        <Form.Select
                          name="brand"
                          value={inputform.brand}
                          onChange={handleChange}
                          className="custom-input"
                        >
                          <option value="">Select Brand</option>
                          {getBrandOptions().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.brandErr && (
                          <small className="text-danger">{inputErr.brandErr}</small>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {/* PRICE + STOCK */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={inputform.price}
                        onChange={handleChange}
                        placeholder="₹ 499"
                        className="custom-input"
                      />
                      {inputErr.priceErr && (
                        <small className="text-danger">{inputErr.priceErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Stock</Form.Label>
                      <Form.Control
                        type="number"
                        name="stock"
                        value={inputform.stock}
                        onChange={handleChange}
                        placeholder="eg. 20"
                        className="custom-input"
                      />
                      {inputErr.stockErr && (
                        <small className="text-danger">{inputErr.stockErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* DISCOUNT */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Discount (%)</Form.Label>
                  <Form.Control
                    type="number"
                    name="discount"
                    value={inputform.discount}
                    onChange={handleChange}
                    placeholder="eg. 10%"
                    className="custom-input"
                  />
                  {inputErr.discountErr && (
                    <small className="text-danger">{inputErr.discountErr}</small>
                  )}
                </Form.Group>

                {/* IMAGES */}
                <Row>
                  {inputform.image.map((img, index) => (
                    <Col md={6} key={index}>
                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">{`Image ${index + 1}`}</Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          value={img}
                          onChange={(e) => handleChange(e, index)}
                          placeholder="Enter Image URL"
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  ))}

                  {inputErr.imageErr && (
                    <Col md={12}>
                      <small className="text-danger">{inputErr.imageErr}</small>
                    </Col>
                  )}
                </Row>

                {/* RATING */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Rating</Form.Label>
                      <Form.Control
                        type="number"
                        name="rating"
                        value={inputform.rates.rating}
                        onChange={handleChange}
                        placeholder="1 to 5"
                        className="custom-input"
                      />
                      {inputErr.ratingErr && (
                        <small className="text-danger">{inputErr.ratingErr}</small>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-semibold">Reviews</Form.Label>
                      <Form.Control
                        type="number"
                        name="rests"
                        value={inputform.rates.rests}
                        onChange={handleChange}
                        placeholder="eg. 120"
                        className="custom-input"
                      />
                      {inputErr.restsErr && (
                        <small className="text-danger">{inputErr.restsErr}</small>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* DESCRIPTION */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={inputform.description}
                    onChange={handleChange}
                    placeholder="Write something about this product..."
                    className="custom-input"
                  />
                  {inputErr.descriptionErr && (
                    <small className="text-danger">{inputErr.descriptionErr}</small>
                  )}
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" className="add-btn px-5 py-2 fw-semibold">
                    ➕ Add Product
                  </Button>
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
