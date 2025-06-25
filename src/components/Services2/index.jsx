import React from "react";
import Link from "next/link";


const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-code"></span>
              <h6>
                Website <br /> Developments
              </h6>
              <div className="text-right">
                <Link href="/project-details2/project-details2-light">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-robot"></span>
              <h6>AI and Machine Learning</h6>
              <div className="text-right">
                <Link href="/project-details2/project-details2-lightML">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-mobile-alt"></span>
              <h6>
                Mobile App <br /> Development
              </h6>
              <div className="text-right">
                <Link href="/project-details2/project-details2-lightAPP">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>

        <div className="row rtwo">
          <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-pencil-ruler"></span>
              <h6>UI/UX Development</h6>
              <div className="text-right">
                <Link href="">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-bullhorn"></span>
              <h6>Digital Marketing</h6>
              <div className="text-right">
                <Link href="/project-details2/project-details2-lightDigital">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-1 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon fas fa-user-check"></span>
              <h6>Hiring and Placement</h6>
              <div className="text-right">
                <Link href="">
                  <a className="more"><i className="fas fa-chevron-right"></i></a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
