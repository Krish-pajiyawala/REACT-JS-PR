import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

import sliderImg1 from "../../../assets/img/Home/Slider-4/img-1.webp";
import sliderImg2 from "../../../assets/img/Home/Slider-4/img-2.webp";
import sliderImg3 from "../../../assets/img/Home/Slider-4/img-3.webp";
import sliderImg4 from "../../../assets/img/Home/Slider-4/img-4.webp";
import sliderImg5 from "../../../assets/img/Home/Slider-4/img-5.webp";
import sliderImg6 from "../../../assets/img/Home/Slider-4/img-6.webp";
import sliderImg7 from "../../../assets/img/Home/Slider-4/img-7.webp";
import sliderImg8 from "../../../assets/img/Home/Slider-4/img-8.webp";
import sliderImg9 from "../../../assets/img/Home/Slider-4/img-9.webp";
import sliderImg10 from "../../../assets/img/Home/Slider-4/img-10.webp";
import sliderImg11 from "../../../assets/img/Home/Slider-4/img-11.webp";
import sliderImg12 from "../../../assets/img/Home/Slider-4/img-12.webp";
import sliderImg13 from "../../../assets/img/Home/Slider-4/img-13.webp";
import sliderImg14 from "../../../assets/img/Home/Slider-4/img-14.webp";
import sliderImg15 from "../../../assets/img/Home/Slider-4/img-15.webp";
import sliderImg16 from "../../../assets/img/Home/Slider-4/img-16.webp";
import sliderImg17 from "../../../assets/img/Home/Slider-4/img-17.webp";
import sliderImg18 from "../../../assets/img/Home/Slider-4/img-18.webp";
import sliderImg19 from "../../../assets/img/Home/Slider-4/img-19.webp";
import sliderImg20 from "../../../assets/img/Home/Slider-4/img-20.webp";
import sliderImg21 from "../../../assets/img/Home/Slider-4/img-21.webp";
import sliderImg22 from "../../../assets/img/Home/Slider-4/img-22.webp";
import sliderImg23 from "../../../assets/img/Home/Slider-4/img-23.webp";
import sliderImg24 from "../../../assets/img/Home/Slider-4/img-24.webp";

const images = [
  sliderImg1, sliderImg2, sliderImg3, sliderImg4, sliderImg5, sliderImg6,
  sliderImg7, sliderImg8, sliderImg9, sliderImg10, sliderImg11, sliderImg12,
  sliderImg13, sliderImg14, sliderImg15, sliderImg16, sliderImg17, sliderImg18,
  sliderImg19, sliderImg20, sliderImg21, sliderImg22, sliderImg23, sliderImg24
];

const chunkImages = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Slider4 = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(6);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(6);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slides = chunkImages(images, itemsPerSlide);

  return (
    <section className="py-5">
      <div className="mb-4 ps-3">
        <h2 className="h3 fw-bold text-dark" style={{ letterSpacing: "5px" }}>
          Medal Worthy Brands To Bag
        </h2>
      </div>

      <Carousel
        activeIndex={current}
        onSelect={(selectedIndex) => setCurrent(selectedIndex)}
        interval={3000}
        pause={false}
        controls={false}
        indicators={false}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="d-flex justify-content-center gap-2 flex-wrap px-2">
              {slide.map((img, i) => (
                <div
                  key={i}
                  className="p-1"
                  style={{ flex: `0 0 calc(${100 / itemsPerSlide}% - 10px)` }}
                >
                  <a href="#">
                    <img
                      src={img}
                      alt={`slide-${idx}-img-${i}`}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "transform 0.3s"
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </a>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-flex justify-content-center mt-3 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`btn p-1 rounded-circle ${i === current ? "btn-dark" : "btn-secondary"}`}
            style={{ width: "8px", height: "8px" }}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider4;
