/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <img
                className="thumparallax-down"
                src="/img/min-area2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Ozi is a forward-thinking technology company dedicated to empowering businesses with innovative AI-driven solutions, including web and app development, digital marketing, and recruitment/IT staffing
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                  At Ozi, our mission is to simplify complex challenges through artificial intelligence, delivering tailored software and services that drive growth and efficiency. We strive to transform how businesses operate by providing cutting-edge tools and expert support, ensuring every client achieves their full potential with scalable, impactful solutions.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                  Ozi strives to achieve excellence by delivering AI-powered solutions in web and app development, digital marketing, and staffing, ensuring our services like luctus massa ipsum at tempus eleifend congue lectus bibendum enhance client success and innovation across startups, SMEs, and enterprises.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                  Ozi stands out with our expert team, cutting-edge technology, and tailored approach, making us the trusted partner for businesses seeking reliable, efficient, and scalable solutions in a competitive landscape.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
