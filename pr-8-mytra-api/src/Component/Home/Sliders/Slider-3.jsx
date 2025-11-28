import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import sliderImg1 from "../../../assets/img/Home/Slider-3/img-1.webp";
import sliderImg2 from "../../../assets/img/Home/Slider-3/img-2.webp";
import sliderImg3 from "../../../assets/img/Home/Slider-3/img-3.webp";
import sliderImg4 from "../../../assets/img/Home/Slider-3/img-4.webp";
import sliderImg5 from "../../../assets/img/Home/Slider-3/img-5.webp";
import sliderImg6 from "../../../assets/img/Home/Slider-3/img-6.webp";
import sliderImg7 from "../../../assets/img/Home/Slider-3/img-7.webp";
import sliderImg8 from "../../../assets/img/Home/Slider-3/img-8.webp";
import sliderImg9 from "../../../assets/img/Home/Slider-3/img-9.webp";
import sliderImg10 from "../../../assets/img/Home/Slider-3/img-10.webp";
import sliderImg11 from "../../../assets/img/Home/Slider-3/img-11.webp";
import sliderImg12 from "../../../assets/img/Home/Slider-3/img-12.webp";
import sliderImg13 from "../../../assets/img/Home/Slider-3/img-13.webp";
import sliderImg14 from "../../../assets/img/Home/Slider-3/img-14.webp";
import sliderImg15 from "../../../assets/img/Home/Slider-3/img-15.webp";
import sliderImg16 from "../../../assets/img/Home/Slider-3/img-16.webp";
import sliderImg17 from "../../../assets/img/Home/Slider-3/img-17.webp";
import sliderImg18 from "../../../assets/img/Home/Slider-3/img-18.webp";

const slider3img = [
  sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5, sliderImg6,
  sliderImg7, sliderImg8, sliderImg9, sliderImg10, sliderImg11, sliderImg12,
  sliderImg13, sliderImg14, sliderImg15, sliderImg16, sliderImg17, sliderImg18,
];

const Slider3 = () => {
  const slides = [];
  for (let i = 0; i < slider3img.length; i += 6) {
    slides.push(slider3img.slice(i, i + 6));
  }

  const [current, setCurrent] = useState(0);

  return (
    <section className="py-5">
      <div className="mb-4 ps-3">
        <h2 className="h3 fw-bold text-dark" style={{ letterSpacing: "5px" }}>
          LUXE GRAND REDUCTION DEALS
        </h2>
      </div>

      <Carousel activeIndex={current} onSelect={(selectedIndex) => setCurrent(selectedIndex)} interval={3000} pause={false} controls={false} indicators={false}    >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-between">
              {slide.map((img, i) => (
                <div key={i} className="flex-fill px-1">
                  <a href="#">
                    <img rc={img} lt={`slide-${idx}-img-${i}`} className="img-fluid" tyle={{
                      height: "fit-content",
                      objectFit: "contain",
                      transition: "transform 0.3s",
                    }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {slides.map((_, i) => (
          <button key={i} type="button" className={`btn p-1 rounded-circle ${i === current ? "btn-dark" : "btn-secondary"}`} style={{ width: "8px", height: "8px" }} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
};

export default Slider3;
