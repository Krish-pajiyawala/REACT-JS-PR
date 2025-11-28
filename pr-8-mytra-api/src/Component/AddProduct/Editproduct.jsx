import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addproduct, Editproduct, updateProduct } from "../Services/Action/AddProductAction";
import generateUniqueId from "generate-unique-id";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const {product} = useSelector(state=>state)
    const {id} = useParams()
  const dispatch = useDispatch();
  const navigat = useNavigate()
  const naviget = useNavigate()
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

  // Handle all input changes
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

     dispatch(updateProduct(inputform))
                setinputform(initialState) 
                naviget('/')
  };

  // Brand selection based on category
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

   useEffect(()=>{
  if(product){
    setinputform(product)
  }
      },[product])

      useEffect(()=>{
       dispatch(Editproduct(id))
      },[id])
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center py-5"
      style={{ backgroundColor: "#f5f5f7", minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4 fw-bold">Edit Product</h3>

              <Form onSubmit={handleSubmit}>
                {/* TITLE + CATEGORY */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={inputform.title}
                        onChange={handleChange}
                        placeholder="Enter Product Title"
                      />
                      {inputErr.titleErr && (
                        <Form.Text className="text-danger">{inputErr.titleErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={inputform.category}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                      </Form.Select>
                      {inputErr.categoryErr && (
                        <Form.Text className="text-danger">{inputErr.categoryErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* SUBCATEGORY + BRAND */}
                {inputform.category && (
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subcategory</Form.Label>
                        <Form.Select
                          name="subcategory"
                          value={inputform.subcategory}
                          onChange={handleChange}
                        >
                          <option value="">Select SubCatagory</option>

                           {getsubCatagory().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.subcategoryErr && (
                          <Form.Text className="text-danger">
                            {inputErr.subcategoryErr}
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Brand</Form.Label>
                        <Form.Select
                          name="brand"
                          value={inputform.brand}
                          onChange={handleChange}
                        >
                          <option value="">Select Brand</option>
                          {getBrandOptions().map((brand, idx) => (
                            <option key={idx} value={brand}>
                              {brand}
                            </option>
                          ))}
                        </Form.Select>
                        {inputErr.brandErr && (
                          <Form.Text className="text-danger">{inputErr.brandErr}</Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                )}

                {/* PRICE + STOCK */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={inputform.price}
                        onChange={handleChange}
                        placeholder="Enter Price"
                      />
                      {inputErr.priceErr && (
                        <Form.Text className="text-danger">{inputErr.priceErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Stock</Form.Label>
                      <Form.Control
                        type="number"
                        name="stock"
                        value={inputform.stock}
                        onChange={handleChange}
                        placeholder="Enter Stock"
                      />
                      {inputErr.stockErr && (
                        <Form.Text className="text-danger">{inputErr.stockErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* DISCOUNT FIELD */}
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Discount (%)</Form.Label>
                      <Form.Control
                        type="number"
                        name="discount"
                        value={inputform.discount}
                        onChange={handleChange}
                        placeholder="Enter Discount Percentage"
                      />
                      {inputErr.discountErr && (
                        <Form.Text className="text-danger">{inputErr.discountErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                {/* IMAGE INPUTS */}
                <Row>
                  {inputform.image.map((img, index) => (
                    <Col md={6} key={index}>
                      <Form.Group className="mb-3">
                        <Form.Label>{`Image ${index + 1}`}</Form.Label>
                        <Form.Control
                          type="text"
                          name="image"
                          value={img}
                          onChange={(e) => handleChange(e, index)}
                          placeholder={`Enter Image ${index + 1} URL`}
                        />
                      </Form.Group>
                    </Col>
                  ))}

                  {inputErr.imageErr && (
                    <Col md={12}>
                      <Form.Text className="text-danger">{inputErr.imageErr}</Form.Text>
                    </Col>
                  )}
                </Row>
  {/* RATES */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="number"
                        name="rating"
                        value={inputform.rates.rating}
                        onChange={handleChange}
                        placeholder="Enter Rating (1-5)"
                        max={5}
                      />
                      {inputErr.ratingErr && (
                        <Form.Text className="text-danger">{inputErr.ratingErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Reviews</Form.Label>
                      <Form.Control
                        type="number"
                        name="rests"
                        value={inputform.rates.rests}
                        onChange={handleChange}
                        placeholder="Enter Number of Reviews"
                      />
                      {inputErr.restsErr && (
                        <Form.Text className="text-danger">{inputErr.restsErr}</Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                {/* DESCRIPTION */}
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={inputform.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter Product Description"
                  />
                  {inputErr.descriptionErr && (
                    <Form.Text className="text-danger">{inputErr.descriptionErr}</Form.Text>
                  )}
                </Form.Group>

              

                <div className="text-center">
                  <Button
                    type="submit"
                    className="px-5 py-2 rounded-3 fw-semibold"
                    style={{ backgroundColor: "#4a6cf7", border: "none" }}
                  >
                    Update Product
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

export default EditProduct;
