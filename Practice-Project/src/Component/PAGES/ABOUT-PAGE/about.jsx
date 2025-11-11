import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";

const AboutPage = () => {
    const image1 = "https://official.garena.com/intl/v1/config/gallery_ff.jpg";
    const image2 = "https://official.garena.com/intl/v1/config/gallery_df.jpg";

    return (
        <>
            <section className="about-hero text-white d-flex align-items-center">
                <Container>
                    <h1 className="fw-bold display-4">About Garena</h1>
                    <p className="lead mt-3 w-75">
                        Garena is a leading global online games developer and publisher, dedicated to
                        bringing joy to millions of gamers around the world.
                    </p>
                </Container>
            </section>

            <section className="company-intro py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <img
                                src="https://images2.alphacoders.com/133/1330741.jpeg"
                                alt="Garena Office"
                                className="img-fluid rounded-4 shadow-sm"
                            />
                        </Col>
                        <Col md={6}>
                            <h2 className="fw-bold mb-3">Who We Are</h2>
                            <p className="text-secondary">
                                Founded in 2009, Garena connects people through technology, building
                                communities and creating memorable experiences. Our platforms empower
                                gamers to connect, compete, and share their passion for games.
                            </p>
                            <p className="text-secondary">
                                We focus on delivering high-quality, engaging content and continuously
                                strive to enhance player experiences through innovation and creativity.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="what-we-do py-5">
                <Container>
                    <h2 className="text-center fw-bold mb-5">What We Do</h2>
                    <Row className="justify-content-center g-4">
                        <Col md={5} sm={12}>
                            <Card className="shadow-sm border-light p-4 what-card">
                                <Card.Img
                                    variant="top"
                                    src={image1}
                                    className="about-card-img mb-3"
                                />
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="red-bar me-2"></div>
                                        <h4 className="fw-bold mb-0">Games</h4>
                                    </div>
                                    <p className="text-secondary mb-3">
                                        Garena operates top-tier mobile and PC games in selected global markets.
                                    </p>
                                    <p className="text-secondary mb-0">
                                        As passionate gamers, we listen to our community and ensure our games
                                        provide exciting, engaging experiences.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={5} sm={12}>
                            <Card className="shadow-sm border-light p-4 what-card">
                                <Card.Img
                                    variant="top"
                                    src={image2}
                                    className="about-card-img mb-3"
                                />
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="red-bar me-2"></div>
                                        <h4 className="fw-bold mb-0">Community</h4>
                                    </div>
                                    <p className="text-secondary mb-3">
                                        We regularly engage with our player community to ensure long-term
                                        satisfaction and loyalty.
                                    </p>
                                    <p className="text-secondary mb-0">
                                        Our events, tournaments, and live experiences foster a strong
                                        sense of belonging among players.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mission-section py-5 bg-light">
                <Container>
                    <h2 className="text-center fw-bold mb-5">Our Mission & Vision</h2>
                    <Row className="g-4">
                        <Col md={6}>
                            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                                <h4 className="fw-bold mb-3">Our Mission</h4>
                                <p className="text-secondary mb-0">
                                    To connect the world through technology and entertainment by offering
                                    innovative, engaging digital experiences for everyone.
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="p-4 rounded-4 shadow-sm bg-white h-100">
                                <h4 className="fw-bold mb-3">Our Vision</h4>
                                <p className="text-secondary mb-0">
                                    To be the global leader in interactive digital content and gaming,
                                    fostering vibrant communities and meaningful connections.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="team-section py-5">
                <Container>
                    <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
                    <Row className="justify-content-center g-4">
                        {[
                            {
                                name: "Forrest Li",
                                role: "Founder & CEO",
                                img: "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2021/08/31/f26961c4-09fe-11ec-993e-492067c62e7c_image_hires_114344.jpg?itok=tesUGKa9&v=1630381432",
                            },
                            {
                                name: "Gang Ye",
                                role: "COO",
                                img: "https://specials-images.forbesimg.com/imageserve/5d6005f595808800097db1c4/416x416.jpg?background=000000&cropX1=610&cropX2=4182&cropY1=168&cropY2=3740",
                            },
                            {
                                name: "Chen Jing",
                                role: "Head of Development",
                                img: "https://tse4.mm.bing.net/th/id/OIP.2m4ZYFuWAgd-wddtEOK-fAHaJw?rs=1&pid=ImgDetMain&o=7&rm=3",
                            },
                        ].map((member, i) => (
                            <Col md={3} sm={6} key={i}>
                                <Card className="team-card text-center border-0 shadow-sm p-3">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="team-img rounded-circle mb-3"
                                    />
                                    <Card.Body>
                                        <h5 className="fw-bold mb-1 text-white">{member.name}</h5>
                                        <p className="text-secondary">{member.role}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutPage;
