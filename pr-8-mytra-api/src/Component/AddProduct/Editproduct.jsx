// EditProduct.jsx
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editproductAsync, updateProductAsync } from "../Services/Action/addProductAction";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaUpload, FaImage, FaStar, FaEdit, FaBox, FaRupeeSign, FaPercentage } from "react-icons/fa";

const EditProduct = () => {
  const { product } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const naviget = useNavigate();

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

  useEffect(() => {
    if (id) dispatch(editproductAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product.id) {
      setinputform(product);
    }
  }, [product]);

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
    if (!inputform.title?.trim()) errors.titleErr = "Enter Product Name";
    if (!inputform.category) errors.categoryErr = "Please select category";
    if (!inputform.subcategory) errors.subcategoryErr = "Please select subcategory";
    if (!inputform.brand) errors.brandErr = "Please select brand";
    if (!inputform.price || inputform.price <= 0) errors.priceErr = "Enter valid price";
    if (inputform.discount == null || inputform.discount < 0) errors.discountErr = "Enter valid discount";
    if (!inputform.stock || inputform.stock <= 0) errors.stockErr = "Enter Stock";
    if (inputform.image.some((img) => !img?.trim())) errors.imageErr = "Provide all Image URLs";
    if (!inputform.description?.trim()) errors.descriptionErr = "Describe the Product";
    if (!inputform.rates?.rating) errors.ratingErr = "Enter Rating";
    if (!inputform.rates?.rests) errors.restsErr = "Enter Number of Reviews";
    setinputErr(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!handleErrors()) return;
    dispatch(updateProductAsync(inputform));
    naviget("/");
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

  if (!product) return <div className="p-5 text-center">Loading product...</div>;

  return (
    <Container fluid className="edit-product-page" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header Section */}
      <div className="py-3" style={{ backgroundColor: "#fff", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
        <Container>
          <div className="d-flex align-items-center gap-3">
            <Button 
              variant="light" 
              onClick={() => naviget("/")}
              className="rounded-circle p-2 border-0"
              style={{ width: "40px", height: "40px" }}
            >
              <FaArrowLeft size={18} />
            </Button>
            <h4 className="mb-0 fw-bold">Edit Product</h4>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-4">
        <Row className="g-4">
          {/* Left Column - Images Preview */}
          <Col lg={4}>
            <div className="bg-white rounded-3 p-4 shadow-sm mb-4">
              <h5 className="mb-3 fw-semibold d-flex align-items-center gap-2">
                <FaImage /> Product Images
              </h5>
              <Row className="g-3">
                {inputform.image.map((img, index) => (
                  <Col md={6} key={index}>
                    <div className="image-upload-preview border rounded-2 p-3 text-center">
                      {img ? (
                        <img 
                          src={img} 
                          alt={`Preview ${index + 1}`} 
                          className="img-fluid rounded-2 mb-2"
                          style={{ height: "120px", objectFit: "cover", width: "100%" }}
                        />
                      ) : (
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "120px" }}>
                          <FaImage size={32} className="text-muted mb-2" />
                          <small className="text-muted">No Image</small>
                        </div>
                      )}
                      <Form.Control
                        type="text"
                        name="image"
                        value={img}
                        onChange={(e) => handleChange(e, index)}
                        placeholder={`Image URL ${index + 1}`}
                        className="form-control-sm"
                      />
                    </div>
                  </Col>
                ))}
              </Row>
              {inputErr.imageErr && (
                <div className="text-danger small mt-2">{inputErr.imageErr}</div>
              )}
            </div>

            {/* Rating Section */}
            <div className="bg-white rounded-3 p-4 shadow-sm">
              <h5 className="mb-3 fw-semibold d-flex align-items-center gap-2">
                <FaStar /> Ratings & Reviews
              </h5>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-medium">Rating (1-5)</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <FaStar size={14} />
                      </span>
                      <Form.Control
                        type="number"
                        name="rating"
                        value={inputform.rates.rating}
                        onChange={handleChange}
                        placeholder="4.5"
                        max={5}
                        step="0.1"
                        className="border-start-0"
                      />
                    </div>
                    {inputErr.ratingErr && (
                      <Form.Text className="text-danger small">{inputErr.ratingErr}</Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="small fw-medium">Reviews Count</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <FaEdit size={14} />
                      </span>
                      <Form.Control
                        type="number"
                        name="rests"
                        value={inputform.rates.rests}
                        onChange={handleChange}
                        placeholder="120"
                        className="border-start-0"
                      />
                    </div>
                    {inputErr.restsErr && (
                      <Form.Text className="text-danger small">{inputErr.restsErr}</Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>

          {/* Right Column - Form */}
          <Col lg={8}>
            <Form onSubmit={handleSubmit} className="bg-white rounded-3 p-4 shadow-sm">
              {/* Basic Information */}
              <div className="mb-4">
                <h5 className="mb-3 fw-semibold border-bottom pb-2">Basic Information</h5>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium">Product Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={inputform.title}
                        onChange={handleChange}
                        placeholder="Enter product name"
                        className="py-2"
                      />
                      {inputErr.titleErr && (
                        <Form.Text className="text-danger small">{inputErr.titleErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-medium">Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={inputform.category}
                        onChange={handleChange}
                        className="py-2"
                      >
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                      </Form.Select>
                      {inputErr.categoryErr && (
                        <Form.Text className="text-danger small">{inputErr.categoryErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              {/* Category Specific Fields */}
              {inputform.category && (
                <div className="mb-4">
                  <h5 className="mb-3 fw-semibold border-bottom pb-2">Category Details</h5>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Subcategory</Form.Label>
                        <Form.Select
                          name="subcategory"
                          value={inputform.subcategory}
                          onChange={handleChange}
                          className="py-2"
                        >
                          <option value="">Select Subcategory</option>
                          {getsubCatagory().map((item, idx) => (
                            <option key={idx} value={item}>
                              {item}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.subcategoryErr && (
                          <Form.Text className="text-danger small">{inputErr.subcategoryErr}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Brand</Form.Label>
                        <Form.Select
                          name="brand"
                          value={inputform.brand}
                          onChange={handleChange}
                          className="py-2"
                        >
                          <option value="">Select Brand</option>
                          {getBrandOptions().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.brandErr && (
                          <Form.Text className="text-danger small">{inputErr.brandErr}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}

              {/* Pricing & Stock */}
              <div className="mb-4">
                <h5 className="mb-3 fw-semibold border-bottom pb-2">Pricing & Inventory</h5>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center gap-1">
                        <FaRupeeSign size={12} /> Price
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaRupeeSign size={12} />
                        </span>
                        <Form.Control
                          type="number"
                          name="price"
                          value={inputform.price}
                          onChange={handleChange}
                          placeholder="999"
                          className="border-start-0 py-2"
                        />
                      </div>
                      {inputErr.priceErr && (
                        <Form.Text className="text-danger small">{inputErr.priceErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center gap-1">
                        <FaPercentage size={12} /> Discount
                      </Form.Label>
                      <div className="input-group">
                        <Form.Control
                          type="number"
                          name="discount"
                          value={inputform.discount}
                          onChange={handleChange}
                          placeholder="20"
                          className="py-2"
                        />
                        <span className="input-group-text bg-light">
                          <FaPercentage size={12} />
                        </span>
                      </div>
                      {inputErr.discountErr && (
                        <Form.Text className="text-danger small">{inputErr.discountErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-medium d-flex align-items-center gap-1">
                        <FaBox size={12} /> Stock
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <FaBox size={12} />
                        </span>
                        <Form.Control
                          type="number"
                          name="stock"
                          value={inputform.stock}
                          onChange={handleChange}
                          placeholder="50"
                          className="border-start-0 py-2"
                        />
                      </div>
                      {inputErr.stockErr && (
                        <Form.Text className="text-danger small">{inputErr.stockErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              {/* Description */}
              <div className="mb-4">
                <h5 className="mb-3 fw-semibold border-bottom pb-2">Product Description</h5>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={inputform.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the product features, material, care instructions, etc."
                    className="py-2"
                  />
                  {inputErr.descriptionErr && (
                    <Form.Text className="text-danger small">{inputErr.descriptionErr}</Form.Text>
                  )}
                </Form.Group>
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 justify-content-end border-top pt-4">
                <Button
                  variant="outline-secondary"
                  onClick={() => naviget("/")}
                  className="px-4 py-2 rounded-2 d-flex align-items-center gap-2"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 rounded-2 fw-semibold d-flex align-items-center gap-2"
                  style={{ 
                    backgroundColor: "#ff3f6c", 
                    borderColor: "#ff3f6c",
                    minWidth: "140px"
                  }}
                >
                  <FaUpload /> Update Product
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default EditProduct;