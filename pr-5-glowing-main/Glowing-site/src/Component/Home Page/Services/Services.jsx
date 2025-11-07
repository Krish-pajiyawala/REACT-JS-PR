import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import Card from 'react-bootstrap/Card';
import Image1 from '../../../assets/Home image/icon-box-01.svg';
import Image2 from '../../../assets/Home image/icon-box-02.svg';
import Image3 from '../../../assets/Home image/icon-box-03.svg';
import Image4 from '../../../assets/Home image/icon-box-04.svg';

let servicesItems = [
  {
    image: Image1,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $100'
  },
  {
    image: Image2,
    title: 'Return',
    description: 'Within 30 days for an exchange.'
  },
  {
    image: Image3,
    title: 'Online Support',
    description: '24 hours a day, 7 days a week'
  },
  {
    image: Image4,
    title: 'Flexible Payment',
    description: 'Pay with Multiple Credit Cards'
  }
];
function ServicesComponent() {
  return (
    <Container>
     <Row className='justify-content-center py-5' >
      {servicesItems.map((item, index) => (
        <Col key={index} xs={12} sm={6} md={3} className='mb-4'>
          <Card className='border-0'>
            <Card.Body>
              <Card.Title className='text-center'>
                <img src={item.image}></img>
                <h5 className='mt-2'>{item.title}</h5>
              </Card.Title>
              <Card.Text className='text-center'>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
     </Row>
    </Container>
  );
}

export default ServicesComponent