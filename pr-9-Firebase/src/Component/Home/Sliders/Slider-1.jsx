import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderImg1 from "../../../assets/img/Home/Slider-1/slider-1.webp";
import sliderImg2 from "../../../assets/img/Home/Slider-1/slider-2.webp";
import sliderImg3 from "../../../assets/img/Home/Slider-1/slider-3.webp";
import sliderImg4 from "../../../assets/img/Home/Slider-1/slider-4.webp";
import sliderImg5 from "../../../assets/img/Home/Slider-1/slider-5.webp";

const sliderData = [
  { id: 1, link: "/#", img: sliderImg1 },
  { id: 2, link: "/#", img: sliderImg2 },
  { id: 3, link: "/#", img: sliderImg3 },
  { id: 4, link: "/#", img: sliderImg4 },
  { id: 5, link: "/#", img: sliderImg5 },
];

const Slider1 = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <Carousel activeIndex={current} onSelect={(selectedIndex) => setCurrent(selectedIndex)} interval={3000} pause={false} controls={false} indicators={false} fade={false}>
        {sliderData.map((item) => (
          <Carousel.Item key={item.id}>
            <a href={item.link}>
              <img src={item.img} alt={`slide-${item.id}`} className="d-block w-100" style={{ objectFit: "cover" }} />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {sliderData.map((_, i) => (
          <button key={i} type="button" className={`btn btn-sm rounded-circle p-0 ${i === current ? "btn-dark" : "btn-secondary"}`}
            style={{ width: "8px", height: "8px" }} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </div>
  );
};

export default Slider1;
