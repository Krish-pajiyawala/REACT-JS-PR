import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../../assets/Home image/hero-slider-01.webp';
import Img2 from '../../../assets/Home image/hero-slider-02.webp';
import Img3 from '../../../assets/Home image/hero-slider-03.webp';
// import './Carousel.css'

let carouselItems = [
  {
    image: Img1,
    title: 'ESSENSTIAL ITEMS',
    heading: 'Beauty Inspired by Real Life '
  },
  {
    image: Img3,
    title: 'NEW COLLECTION',
    heading: 'Get The Perfectly Hadrated Skin '
  },
  {
    image: Img2,
    title: 'Get The Glow',
    heading: 'Be Your Kind of Beauty'
  }
]
function CarouselComponent() {
  return (
    <Carousel data-bs-theme="dark" className='mt-5'>
      {carouselItems.map((item, index) => (
        <Carousel.Item className="height-700" key={index}>
          <img
            className="d-block w-100 height-700"
            src={item.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="carousel-caption">
            <h6 className='fw-medium'>{item.title}</h6>
            <h1 className="display-4 fw-medium mt-4">{item.heading}</h1>
            <p className="fs-5 mt-4">Made using clean, non-toxic ingredients,our products are designed for everyone</p>
            <button className="btn btn-dark mt-3 px-4 py-2 border-0 fs-5">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
