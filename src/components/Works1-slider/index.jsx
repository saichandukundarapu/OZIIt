import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// install the navigation module
SwiperCore.use([Navigation]);

const Works1Slider = () => {
  const navRefs = [
    { prev: useRef(null), next: useRef(null) },
    { prev: useRef(null), next: useRef(null) },
    { prev: useRef(null), next: useRef(null) }
  ];

  const sliders = [
    ["Slide 1.1", "Slide 1.2", "Slide 1.3"],
    ["Slide 2.1", "Slide 2.2", "Slide 2.3"],
    ["Slide 3.1", "Slide 3.2", "Slide 3.3"]
  ];

  return (
    <div className="works1-sliders">
      {sliders.map((slides, index) => (
        <div className="works-slider-container" key={index} style={{ marginBottom: "50px" }}>
          <div className="swiper-button-prev" ref={navRefs[index].prev}></div>
          <div className="swiper-button-next" ref={navRefs[index].next}></div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params && swiper.params.navigation) {
                  swiper.params.navigation.prevEl = navRefs[index].prev.current;
                  swiper.params.navigation.nextEl = navRefs[index].next.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            {slides.map((content, idx) => (
              <SwiperSlide key={idx}>
                <div className="slide-content">{content}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default Works1Slider;
