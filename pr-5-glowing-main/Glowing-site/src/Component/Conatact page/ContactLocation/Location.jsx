import { Button, ButtonGroup } from 'react-bootstrap';
import {  FaPlus, FaMinus ,FaCompass  } from "react-icons/fa";

import locationImg from '../../../assets/contact image/marker.webp'
import './location.css'
const Location = () => {
  return (
    <>
      <div className='position-relative location-main p-5'>
        <div className='position-absolute location-item-1'>
          <div className='image-animation'>
            <img src={locationImg} alt="" />
          </div>
        </div>

        <div className='position-absolute location-item-2'>
          <div className='image-animation'>
            <img src={locationImg} alt="" />
          </div>
        </div>

     <div className='location-item-3'>
   <ButtonGroup vertical>
        <Button variant="light" className="control-btn">
          <FaPlus />
        </Button>
        <Button variant="light" className="control-btn">
          <FaMinus />
        </Button>
        <Button variant="light" className="control-btn">
          <FaCompass />
        </Button>
      </ButtonGroup>
</div>

      </div>
    </>
  )



}
export default Location;
