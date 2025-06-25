import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsTwoColumnSlider = () => {
  return (
    <section className="blog-curs section-padding sub-bg">
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Technologies
          </h6>
          <h3 className="wow" data-splitting>
            WE USE
          </h3>
          <span className="tbg">TECHNOLOGIES</span>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider
              className="blg-swipe wow fadeInUp"
              data-wow-delay=".5s"
              {...{
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                  {
                    breakpoint: 991,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                ],
              }}
            >
              <div className="item-box">
                <div className="item">
                  <div className="bimg">
                    <div
                      className="img bg-img"
                      style={{ backgroundImage: "url(/img/clients/brands/IM1.PNG)" }}
                    ></div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <div className="info custom-font">
                        <a href="#0" className="author">
                          <span>AI and Machine Learning Frameworks</span>
                        </a>
                        <Link href="/project-details2/project-details2-lightML">
                          <a className="date">
                            <span>
                              <i></i> 
                            </span>
                          </a>
                        </Link>
                      </div>
                      <h6 className="custom-font">
                        <Link href="/project-details2/project-details2-lightML">
                        Ozi leverages cutting-edge technologies like TensorFlow, PyTorch, and NLTK to deliver AI-powered web development
                        </Link>
                      </h6>
                      <div className="btn-more custom-font">
                        <Link href="/project-details2/project-details2-lightML">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <div className="item">
                  <div className="bimg">
                    <div
                      className="img bg-img"
                      style={{ backgroundImage: "url(/img/clients/brands/IM2.jpg)" }}
                    ></div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <div className="info custom-font">
                        <a href="#0" className="author">
                          <span>MERN Stack Framework</span>
                        </a>
                        <Link href="/project-details2/project-details2-light">
                          <a className="date">
                            <span>
                              <i></i> 
                            </span>
                          </a>
                        </Link>
                      </div>
                      <h6 className="custom-font">
                        <Link href="/project-details2/project-details2-light/">
                        Ozi harnesses the power of the MEAN stack—MongoDB, Express.js, Angular/React JS, and Node.js—to deliver robust, scalable web and app development solutions
                        </Link>
                      </h6>
                      <div className="btn-more custom-font">
                        <Link href="/project-details2/project-details2-light">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-box">
                <div className="item">
                  <div className="bimg">
                    <div
                      className="img bg-img"
                      style={{ backgroundImage: "url(/img/clients/brands/IM3.jpg)" }}
                    ></div>
                  </div>
                  <div className="cont valign">
                    <div className="full-width">
                      <div className="info custom-font">
                        <a href="#0" className="author">
                          <span>Google Marketing Platform</span>
                        </a>
                        <Link href="/project-details2/project-details2-lightDigital">
                          <a className="date">
                            <span>
                              <i></i> 
                            </span>
                          </a>
                        </Link>
                      </div>
                      <h6 className="custom-font">
                        <Link href="/project-details2/project-details2-lightDigital">
                        Ozi uses the Google Marketing Platform to integrate tools like Campaign Manager 360 and Analytics 360 for unified advertising and analytics
                        </Link>
                      </h6>
                      <div className="btn-more custom-font">
                        <Link href="/project-details2/project-details2-lightDigital">
                          <a className="simple-btn">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsTwoColumnSlider;
