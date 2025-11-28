import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Carousel } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { LiaTrashRestoreSolid } from "react-icons/lia";
import { deleteproduct } from "../Services/Action/addProductAction";

const ViewProduct = () => {
  const [ingindex, setingindex] = useState(0);
  const [current, setCurrent] = useState(0);

  const { products } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch()
  const naviget = useNavigate()
  const product = products.find((product) => product.id == id);
  const sliderData = product.image;

  if (!product) return <p className="p-5">Product Not Found</p>;

  const handalimage = (index) => {
    setingindex(index);
  };
const handalDelete = (id)=>{
  dispatch(deleteproduct(id))
  naviget('/')
}

const handalEdit = (id)=>{
  naviget(`/edit-product/${id}`)
}
  return (
    <Container fluid className="mt-4">
      <Row className="mt-3">

        <Col md={6} className="d-none d-md-block">
          <Row>

            <Col md={2}>
              <Row className="flex-column">
                {product.image.map((img, index) => (
                  <Col md={12} key={index} className="mb-3" onMouseEnter={() => handalimage(index)} style={{ cursor: "pointer" }} >
                    <Card className="shadow-sm border-0">
                      <Card.Img src={img} style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                      }} />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Main Image */}
            <Col md={8} className="text-center mx-3">
              <img src={product.image[ingindex]} alt="" className="w-100" style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "10px",
              }} />
            </Col>

          </Row>
        </Col>
        <Col xs={12} className="d-block d-md-none">



          <Carousel activeIndex={current} onSelect={(selectedIndex) => setCurrent(selectedIndex)} interval={3000} pause={false} controls={false} indicators={false}>
            {product.image.map((img, index) => (
              <Carousel.Item key={index}>
                <img src={img} alt={`slide-${index}`} className="d-block w-100" style={{
                  height: "420px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="d-flex justify-content-center mt-3 gap-2">
            {product.image.map((_, i) => (
              <button key={i} type="button" className={`btn btn-sm rounded-circle p-0 ${i === current ? "btn-dark" : "btn-secondary"}`} style={{ width: "8px", height: "8px" }} onClick={() => setCurrent(i)} />
            ))}
          </div>

        </Col>
        <Col md={6}>
          <h3 className="fw-bold">{product.brand}</h3>

          <h5 className="text-muted">{product.title}</h5>
           <p>{product.description}</p>
          <div className="mt-3 mb-4">
            <h4 className="fw-bold text-dark">
              ₹{" "}
              {Math.floor(
                Number(product.price) -
                (Number(product.price) * Number(product.discount || 0)) / 100
              )}
            </h4>

            <div>
              <span className="text-decoration-line-through text-muted">
                MRP ₹{product.price}
              </span>
              <span className="text-danger fw-semibold ms-2">
                ({product.discount}% OFF)
              </span>
            </div>

            <small className="text-success">inclusive of all taxes</small>
          </div>

          <h6 className="fw-bold mt-4">SELECT SIZE</h6>
          <div className="d-flex gap-2 flex-wrap mb-4">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <Button
                key={s}
                variant="outline-danger"
                className="rounded-circle"
                style={{ width: 50, height: 50 }}
              >
                {s}
              </Button>
            ))}
          </div>

          <div className="d-flex gap-3 mb-4">
            <Button
              variant="danger"
              className="px-4 py-2 d-flex align-items-center fw-bold" onClick={()=>handalDelete(product.id)}
            >
              <LiaTrashRestoreSolid size={20} className="me-2"/>
              DELETE
            </Button>

            <Button
              variant="outline-dark"
              className="px-4 py-2 d-flex align-items-center fw-bold" onClick={()=>handalEdit(product.id)}
            >
              <CiEdit size={20} className="me-2" />
              EDIT
            </Button>
          </div>

          <div className="mt-4">
            <h6 className="fw-bold">
              DELIVERY OPTIONS <FiTruck className="ms-2" />
            </h6>

            <div className="position-relative mt-2">
              <Form.Control placeholder="Enter pincode" className="py-3" />

              <Button
                variant=" "
                className="position-absolute end-0 top-50 translate-middle-y text-danger"
                style={{ height: "75%" }}
              >
                CHECK
              </Button>
            </div>

            <small className="text-muted">
              Please enter PIN to check delivery time & Pay on Delivery
              availability.
            </small>
          </div>

          <hr className="my-4" />

          <div>
            <h6 className="fw-bold">100% ORIGINAL PRODUCTS</h6>
            <p className="text-muted">
              Fast delivery options available depending on your pincode.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
