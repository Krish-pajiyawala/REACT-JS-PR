import { Container, Row, Col, Card } from "react-bootstrap";
import "./mode.css";

const detailsData = [
  {
    img: "https://i.pinimg.com/1200x/d5/e3/4b/d5e34b89dfbf7c311537b14ce8e6e72c.jpg",
    title: "BERMUDA",
    desc: "An iconic battleground filled with vibrant locations and intense close-range fights."
  },
  {
    img: "https://i.pinimg.com/736x/a2/84/b6/a284b64bf57b698a0c9c791c99567b7a.jpg",
    title: "POURGETORY",
    desc: "A fierce island divided by rivers and bridges, where every move decides between victory and doom."
  },
  {
    img: "https://i.pinimg.com/736x/e8/e3/60/e8e360857cd3367721c526d200ae46c5.jpg",
    title: "KALAHARI",
    desc: "A desert-themed map packed with dunes, cliffs, and high-ground combat zones."
  },
  {
    img: "https://i.pinimg.com/736x/a9/9f/34/a99f348f63480628b77d78363eaa0b60.jpg",
    title: "BERMUDA REMASTER",
    desc: "A modern take on the classic map, redesigned with enhanced visuals and gameplay flow."
  },
  {
    img: "https://staticg.sportskeeda.com/editor/2022/08/858c0-16610250920962-1920.jpg",
    title: "NEXTERA",
    desc: "A futuristic battleground featuring neon lights, skyscrapers, and fast-paced combat."
  },
  {
    img: "https://img.gurugamer.com/resize/1200x-/2025/09/11/ff-solara-guide-vi-cf7e.jpg",
    title: "SOLARA",
    desc: "A tropical-inspired new map where sunlight and shadow influence survival strategy."
  }
];

const DetailsSection = () => {
  return (
    <section className="details-section py-5">
      <Container>
        <h2 className="text-center mb-5 section-title">
          Our <span className="highlight">MODES</span>
        </h2>
        <Row>
          {detailsData.map((item, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-4">
              <Card className="detail-card h-100 text-center shadow-sm overflow-hidden">
                <div className="image-container">
                  <Card.Img variant="top" src={item.img} className="card-img-top" />
                </div>
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-2 text-uppercase">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-light small">
                    {item.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DetailsSection;
