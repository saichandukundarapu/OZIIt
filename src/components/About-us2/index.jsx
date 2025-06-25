/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "orange",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>Our Solutions</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                 Ozi provides a dynamic range of AI-powered offerings to revolutionize businesses, encompassing creative digital platforms
                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
              Our solutions leverage cutting-edge AI technologies like TensorFlow and PyTorch to deliver personalized experiences, seamless scalability, and data-driven insights, while our expert team collaborates closely with clients to address unique challenges, enhance operational efficiency, and drive sustainable success in a competitive digital landscape.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
                Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                volutpat velit class aptent taciti sociosqu ad litora.
              </p>
              <Split>
                <Link href="/about/about-light">
                  <a
                    className="words chars splitting simple-btn custom-font mt-30 wow"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/15.png" alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
