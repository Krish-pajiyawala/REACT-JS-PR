import { FaArrowRightLong } from "react-icons/fa6";
import "./More.css";
import summerImage from "../../../assets/Home image/image-box-01.webp";
import blogImage from "../../../assets/Home image/image-box-02.webp";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const moreItems = [
  {
    img: summerImage,
    title: "Summer Collection"
  },
  {
    img: blogImage,
    title: "From Our Blog"
  },
]
const More = () => {
  return (
    <Container className="my-5 py-4">
      <Row className="text-center mb-4">
        <Col className="col">
          <h2 className="fw-medium">More to Discover</h2>
          <p className="text-muted fs-5 mb-4">
            Our bundles were designed to conveniently package your tanning
            essentials while saving you money.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {moreItems.map((item, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 border-0 overflow-hidden">
              <Card.Img variant="top" src={item.img} alt={item.title} className="hover-img" />
              <Card.Body className="text-center">
                <Card.Title className="fw-medium">{item.title}</Card.Title>
                <Button variant="white" href="#shop" className="mt-3 fw-medium">
                  Shop Now &nbsp;
                  <FaArrowRightLong />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default More;
