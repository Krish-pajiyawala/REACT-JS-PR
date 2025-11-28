import { useDispatch, useSelector } from 'react-redux'
import Coupon from './coupon-code/Coupon'
import Shop from './Shop/Shop'
import Slider1 from './Sliders/Slider-1'
import Slider2 from './Sliders/Slider-2'
import Slider3 from './Sliders/Slider-3'
import Slider4 from './Sliders/Slider-4'
import Slider5 from './Sliders/Slider-5'

const Home=()=> {
  
  return (
    <>
    <Coupon/>
    <Slider1/>
    <Slider2/>
    <Slider3/>
    <Slider4/>
    <Slider5/>
    <Shop/>
    </>
  )
}

export default Home