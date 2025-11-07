import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image1 from "../../../assets/Home image/featured-box-03.png";
import Image2 from "../../../assets/Home image/featured-box-02.png";
import Image3 from "../../../assets/Home image/featured-box-01.png";

let servicesItems = [
  {
    image: Image1,
    title:
      '" Also the customer services is phenomenal. I Would purchase again. "',
  },
  {
    image: Image2,
    title: '"Great product line. Very attentive staff to deal with."',
  },
  {
    image: Image3,
    title:
      '"Are you looking to upgrade your beauty at an affordable price? Look no further than e.Space"',
  },
];
function SeenComponent() {
  return (
    <div className="py-5" style={{ backgroundColor: "#e6ede9" }}>
        <Container>
      <h1 className="fw-medium text-center my-5">As seen in</h1>
      <Row className="justify-content-center my-5">
        {servicesItems.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="border-0" style={{ backgroundColor: "transparent" }}>
              <Card.Body>
                <Card.Title className="text-center">
                  <img src={item.image}></img>
                  <h5 className="mt-2 text-center" style={{ fontSize: "18px" }}>
                    {item.title}
                  </h5>
                </Card.Title>
                <Card.Text className="text-center">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default SeenComponent;
