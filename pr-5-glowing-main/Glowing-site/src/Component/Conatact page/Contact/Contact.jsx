import { Col, Container, Row } from 'react-bootstrap';
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";



import { FaPlus, FaMinus, FaArrowDown } from 'react-icons/fa';
import './Contact.css'
import Location from '../ContactLocation/Location';
import ContactForm from '../ContactForm/Form';
const Contact = () => {
  return (
    <>
        <div className='currant-page w-100 py-2'>
          <p className='text-center mb-0'>Home - <span className='fw-medium text-black'>Contact Us 01</span></p>
        </div>
     <div className='pt-5'>
       <Container>
        <div className='text-center'>
          <h2 className='fw-bolder'>Keep In Touch with Us</h2>
          <Col sm={12} md={8} className='mx-auto px-lg-5 mt-4'>
              <p className=' mx-auto text-color px-lg-5 fs-6'>Were talking about clean beauty gift sets, of course – and weve got a bouquet of beauties for yourself or someone you love.</p>
          </Col>
        </div>

        <Row className='justify-content-around p-5 '>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12} md={2} className='mb-3 mb-md-0'>
                <div>
                  <CiLocationOn className='text-success fs-1' />
                </div>
              </Col>
              <Col xs={10} className='pe-md-5'>
                <h3 className='fw-bold h5'>Address</h3>
                <p className='text-body-color'>3245 Abbot Kinney BLVD - PH Venice, CA 124</p>
                <p className='text-body-color pe-lg-5 me-lg-4'>76 East Houston Street New York City</p>
                <a href="#" className='text-decoration-none text-black fw-bold under-line'>Get Direction</a>

              </Col>
            </Row>
          </Col>


          <Col xs={12} md={4}  className='my-5 my-md-0'>
            <Row>
              <Col xs={12} md={2} className='mb-3 mb-md-0'>

                <div>
                  <PiPhoneCallLight className='text-success fs-1' />
                </div>
              </Col>
              <Col xs={10} >
                <h3 className='fw-bold h5' >Contact</h3>
                <p className='mb-0 text-body-color'>Mobile: <span className=' ms-1 fw-medium text-black me-3'>068 26589 996</span></p>
                <p className='my-1 text-body-color'>Hotline: <span className=' ms-1 fw-medium text-black me-3'>1900 26886</span> </p>
                <p className='text-body-color'>E-mail: hello@grace.com</p>
              </Col>
            </Row>
          </Col>


          <Col xs={12} md={4}>
            <Row >
              <Col xs={12} md={2} className='mb-3 mb-md-0'>

                <div>
                  <CiClock2 className='text-success fs-1' />
                </div>
              </Col>
              <Col xs={10}>
                <h3 className='fw-bold h5'>Hour of operation</h3>
                <p className='text-body-color mb-0'><span className='fw-medium text-black me-3'>Mon - Fri:</span>08:30 – 20:00</p>
                <p className='text-body-color '><span className='fw-medium text-black me-3'>Sat & Sun:</span>:09:30 – 21:30</p>
              </Col>
            </Row>
          </Col>
        </Row>


        <Location/>
        <ContactForm/>
      </Container>
     </div>




{/* <div className="control-panel">
      <ButtonGroup vertical>
        <Button variant="light" className="control-btn">
          <FaPlus />
        </Button>
        <Button variant="light" className="control-btn">
          <FaMinus />
        </Button>
        <Button variant="light" className="control-btn">
          <FaArrowDown />
        </Button>
      </ButtonGroup>
    </div> */}
    </>
  )
}

export default Contact;
