import Carousel from './Carousel/Carousel'
import FeaturedProducts from './Products/Product'
import Offre from './Offer/Offre'
import Services from './Services/Services'
import Seen from './Seen/Seen'
import Customer from './Customer/Customer'
import More from './More/More'
import './Carousel/Carousel.css'

const Home=()=> {
  return (
    <>
    <Carousel/>
    <FeaturedProducts/>
    <Offre/>
    <Services/>
    <Seen/>
    <Customer/>
    <More/>
    </>
  )
}

export default Home