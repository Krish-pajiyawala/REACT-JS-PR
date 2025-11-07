import { Form,Row,Col,Button } from 'react-bootstrap';
import './Form.css'
 const ContactForm = ()=> {
  return (
    <>
      <div className='py-5'>
        <h2 className="text-center mb-4">Send A Message</h2>
      <Col xs={12} md={8}  className="mx-auto">
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
          </Col>
          <Col md={6} className='mt-3 mt-md-0'>
            <Form.Group controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control as="textarea" rows={8} placeholder="Message" />
        </Form.Group>

        <div className="text-center">
          <Button className='px-4' variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      </Col>
      </div>
    </>
  )
}

export default ContactForm;