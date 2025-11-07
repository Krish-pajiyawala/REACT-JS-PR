import { Container, Row, Col } from "react-bootstrap";
import pic1 from "../../../assets/about image/banner1.webp";
import pic2 from "../../../assets/about image/banner2.webp";


function Photos() {
    return (
        <Container>
            <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                    <div className="glow-img-wrap">
                        <img src={pic1} alt="pic1" className="glow-img" />
                        <div className="shine"></div>
                    </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
                    <div className="glow-img-wrap">
                        <img src={pic2} alt="pic2" className="glow-img" />
                        <div className="shine"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Photos;