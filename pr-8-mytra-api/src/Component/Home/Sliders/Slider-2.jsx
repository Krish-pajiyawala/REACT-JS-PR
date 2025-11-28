import Carousel from "react-bootstrap/Carousel";
import sliderImg1 from "../../../assets/img/Home/Slider-2/img-1.webp";
import sliderImg2 from "../../../assets/img/Home/Slider-2/img-2.webp";
import sliderImg3 from "../../../assets/img/Home/Slider-2/img-3.webp";
import sliderImg4 from "../../../assets/img/Home/Slider-2/img-4.webp";
import sliderImg5 from "../../../assets/img/Home/Slider-2/img-5.webp";
import sliderImg6 from "../../../assets/img/Home/Slider-2/img-6.webp";
import sliderImg7 from "../../../assets/img/Home/Slider-2/img-7.webp";
import sliderImg8 from "../../../assets/img/Home/Slider-2/img-8.webp";
import sliderImg9 from "../../../assets/img/Home/Slider-2/img-9.webp";
import sliderImg10 from "../../../assets/img/Home/Slider-2/img-10.webp";
import sliderImg11 from "../../../assets/img/Home/Slider-2/img-11.webp";
import sliderImg12 from "../../../assets/img/Home/Slider-2/img-12.webp";
import sliderImg13 from "../../../assets/img/Home/Slider-2/img-13.webp";
import sliderImg14 from "../../../assets/img/Home/Slider-2/img-14.webp";
import sliderImg15 from "../../../assets/img/Home/Slider-2/img-15.webp";
import { useState } from "react";

const slider2img = [
  sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5,
  sliderImg6, sliderImg7, sliderImg8, sliderImg9, sliderImg10,
  sliderImg11, sliderImg12, sliderImg13, sliderImg14, sliderImg15
];

const Slider2 = () => {
  const slides = [];
  for (let i = 0; i < slider2img.length; i += 5) {
    slides.push(slider2img.slice(i, i + 5));
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-5">
      <div className="mb-4 ps-3">
        <h2 className="h3 fw-bold text-dark" style={{ letterSpacing: "5px" }}>
          RISING STARS
        </h2>
      </div>

      <Carousel activeIndex={currentSlide} onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)} interval={3000} controls={false} indicators={false} pause={false} >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-between">
              {slide.map((img, i) => (
                <div key={i} className="flex-fill ">
                  <img src={img} alt={`slide-${idx}-img-${i}`} className="img-fluid" style={{
                    objectFit: "contain",
                    transition: "transform 0.3s",
                    height: "fit-content"
                  }} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {slides.map((_, i) => (
          <button key={i} type="button" className={`btn btn-sm rounded-circle p-0 ${i === currentSlide ? "btn-dark" : "btn-secondary"}`} style={{ width: "8px", height: "8px" }} onClick={() => setCurrentSlide(i)} />
        ))}
      </div>
    </section>
  );
};

export default Slider2;
