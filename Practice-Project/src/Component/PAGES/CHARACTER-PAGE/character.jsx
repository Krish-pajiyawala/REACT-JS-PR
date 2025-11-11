import { Container, Row, Col, Card } from "react-bootstrap";
import "./character.css";

const characters = [
  {
    name: "DJ ALOK",
    role: "RECOVER HP",
    desc: "Creates a 5m aura that increases movement speed and restores HP over time — perfect for team support during intense fights.",
    img: "https://i.pinimg.com/736x/5b/a5/27/5ba527cb08990e50be0993f20b24cc7d.jpg",
  },
  {
    name: "CR7",
    role: "DAMAGE BLOCKING",
    desc: "Activates a force field that blocks enemy damage temporarily, allowing you to counterattack or retreat strategically.",
    img: "https://i.pinimg.com/736x/57/08/10/57081049da1fa9c3e20d55c3f555dcfa.jpg",
  },
  {
    name: "SKYLER",
    role: "SONIC WAVE",
    desc: "Unleashes a sonic wave that destroys enemy gloo walls and recovers HP for every wall destroyed — a true aggressive tactician.",
    img: "https://i.pinimg.com/736x/b4/93/1e/b4931eb39d82730b3ee15f06de7ca7b6.jpg",
  },
  {
    name: "K",
    role: "INCREASE EP/HP",
    desc: "Alternates between two modes: EP to HP conversion and fast EP recovery, offering both offense and defense options.",
    img: "https://i.pinimg.com/736x/56/28/07/562807eefe5829f1b35cf02669a4266c.jpg",
  },
  {
    name: "WUKONG",
    role: "CAMOUFLAGE",
    desc: "Transforms into a bush to confuse enemies — ideal for surprise attacks or escaping tight situations.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOV0P9TVkomh8CAUxVRktaJn1VDJ1Hit3Gg&s",
  },
  {
    name: "KELLY",
    role: "SPEED BOOST",
    desc: "Increases sprinting speed, allowing you to close distances quickly or escape danger effortlessly — perfect for fast-paced gameplay.",
    img: "https://i.pinimg.com/736x/7a/a1/94/7aa19454dbec2082079903fd74dae559.jpg",
  },
];

const CharacterPage = () => {
  return (
    <div className="character-page">
      <section className="character-hero d-flex align-items-center text-center">
        <Container>
          <h1 className="fw-bold display-5 text-white">
            Meet Our Legendary <span className="text-gold">Characters</span>
          </h1>
          <p className="lead text-light mx-auto w-75">
            Each character in Free Fire MAX brings unique abilities that define your playstyle.
            Choose wisely — survival depends on your team synergy.
          </p>
        </Container>
      </section>

      <section className="team-section py-5 text-center">
        <Container>
          <p className="text-gold fw-semibold small mb-1">OUR CHARACTER LINEUP</p>
          <h2 className="fw-bold text-dark mb-4">ACTIVE HEROES</h2>
          <div className="gold-line mx-auto mb-5"></div>

          <Row className="justify-content-center g-4">
            {characters.map((char, index) => (
              <Col key={index} md={4} sm={6}>
                <Card className="team-card text-center border-0">
                  <div className="card-bg-shape"></div>
                  <div className="avatar-wrapper mx-auto">
                    <img src={char.img} alt={char.name} className="avatar-img" />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-white fw-bold mt-3 mb-1">
                      {char.name}
                    </Card.Title>
                    <Card.Text className="text-gold fw-semibold mb-2">
                      {char.role}
                    </Card.Text>
                    <p className="text-secondary small px-3">{char.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CharacterPage;
