import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Offre.css";
let Offer = () => {
  return (
    <Container className="my-5">
      <div className="d-flex align-items-center">
        <div className="col-6 overflow-hidden">
          <div className="offerItem me-2 px-5 py-5">
            <h6>NEW COLLECTION</h6>
            <h1>Intensive Glow C+ Serum</h1>
            <Button variant="white" className="mt-4 px-4 py-2 button" style={{color:'#000'}}>
              Explore More
            </Button>
          </div>
        </div>
        <div className="col-6 overflow-hidden">
          <div className="offerItem2 ms-2 px-5 py-5">
            <h1>25% off Everything</h1>
            <h6 className="mt-4 fs-5">Makeup with extended range in colors for every human.</h6>
            <Button variant="light" className="mt-4 px-4 py-2 button">
              Shop Sale
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Offer;
