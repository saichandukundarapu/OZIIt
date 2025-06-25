import React from "react";
import introData from "../../data/sections/intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Navigation, Parallax, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";

SwiperCore.use([Navigation, Parallax, Autoplay]);

const IntroWithSlider2 = () => {
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <header className="slider slider-prlx">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            autoplay={true}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption dig">
                          <Split>
                            <h1 className="words chars splitting">
                              {typeof slide.title === "object" ? (
                                <>
                                  {slide.title.first}
                                  <div className="tline">{slide.title.second}</div>
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                          <Link href="/works3/works3-light">
                            <a className="simple-btn mt-50">
                              <span>Discover our services</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}

        {/* Navigation Arrows */}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>

        {/* Removed Pagination */}
        {/* <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div> */}

        <div className="social-icon">
          <a href="#0"><i className="fab fa-facebook-f"></i></a>
          <a href="#0"><i className="fab fa-twitter"></i></a>
          <a href="#0"><i className="fab fa-behance"></i></a>
          <a href="#0"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider2;
