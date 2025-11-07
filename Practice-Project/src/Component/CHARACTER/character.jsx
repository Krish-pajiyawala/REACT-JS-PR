import { Container, Row, Col, Card } from "react-bootstrap";
import "./character.css";

const teamMembers = [
  {
    name: "DJ ALOK",
    role: "RECOVER HP",
    img: "https://i.pinimg.com/736x/5b/a5/27/5ba527cb08990e50be0993f20b24cc7d.jpg",
  },
  {
    name: "CR7",
    role: "DAMAGE BLOCKING",
    img: "https://i.pinimg.com/736x/57/08/10/57081049da1fa9c3e20d55c3f555dcfa.jpg",
  },
  {
    name: "SKYLER",
    role: "SONIC WAVE",
    img: "https://i.pinimg.com/736x/b4/93/1e/b4931eb39d82730b3ee15f06de7ca7b6.jpg",
  },
  {
    name: "K",
    role: "INCREASE EP/HP",
    img: "https://i.pinimg.com/736x/56/28/07/562807eefe5829f1b35cf02669a4266c.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section py-5 text-center">
      <Container>
        <p className="text-gold fw-semibold small mb-1">OUR CHARACTER</p>
        <h2 className="fw-bold text-dark mb-4">ACTIVE TEAM MEMBERS</h2>
        <div className="gold-line mx-auto mb-5"></div>

        <Row className="justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <Col key={index} md={3} sm={6}>
              <Card className="team-card text-center border-0">
                <div className="card-bg-shape"></div>
                <div className="avatar-wrapper mx-auto">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="avatar-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-white fw-bold mt-3 mb-1">
                    {member.name}
                  </Card.Title>
                  <Card.Text className="text-gold fw-semibold mb-0">
                    {member.role}
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

export default TeamSection;
