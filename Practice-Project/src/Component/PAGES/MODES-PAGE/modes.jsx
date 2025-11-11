import { Container, Row, Col, Card } from "react-bootstrap";
import "./modes.css";

const modesData = [
  {
    img: "https://i.pinimg.com/1200x/d5/e3/4b/d5e34b89dfbf7c311537b14ce8e6e72c.jpg",
    title: "BERMUDA",
    desc: "An iconic battleground filled with vibrant locations and intense close-range fights."
  },
  {
    img: "https://i.pinimg.com/736x/a2/84/b6/a284b64bf57b698a0c9c791c99567b7a.jpg",
    title: "PURGATORY",
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

const ModesPage = () => {
  return (
    <div className="modes-page">
      <section className="modes-hero d-flex align-items-center">
        <Container>
          <h1 className="fw-bold display-5">
            Explore Our Game <span className="highlight">MODES</span>
          </h1>
          <p className="lead text-light w-75">
            Step into diverse battlegrounds — from deserts to futuristic cities — each designed to test your strategy and survival instincts.
          </p>
        </Container>
      </section>

      <section className="modes-list py-5">
        <Container>
          <h2 className="text-center mb-5 section-title">
            Battle <span className="highlight">Arenas</span>
          </h2>
          <Row>
            {modesData.map((mode, index) => (
              <Col key={index} md={4} sm={6} xs={12} className="mb-4">
                <Card className="mode-card h-100 text-center shadow-sm overflow-hidden">
                  <div className="image-container">
                    <Card.Img variant="top" src={mode.img} className="card-img-top" />
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold mb-2 text-uppercase text-warning">
                      {mode.title}
                    </Card.Title>
                    <Card.Text className="text-light small">
                      {mode.desc}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="modes-info py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <div className="info-img-wrapper">
                <img
                  src="https://cdn-www.bluestacks.com/bs-images/504209383_1144346517731830_1144802600593542259_n3.jpg"
                  alt="Mode Overview"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </Col>
            <Col md={6}>
              <h2 className="fw-bold mb-3 text-dark">
                Choose Your <span className="highlight">Battlefield</span>
              </h2>
              <p className="text-secondary">
                Whether you love intense short-range battles or strategic long-range duels,
                each mode in Free Fire MAX is designed to deliver a thrilling experience.
                Explore, adapt, and dominate the field!
              </p>
              <p className="text-muted">
                Every environment comes alive with rich visuals, tactical cover spots,
                and unique loot areas that make every drop exciting and unpredictable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ModesPage;
