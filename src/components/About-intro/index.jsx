import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Ozi is a dynamic technology company dedicated to empowering businesses with innovative AI-driven solutions, including web and app development, digital marketing, and recruitment/IT staffing. Comprised of a passionate team of experts, we craft tailored software and services to simplify complex challenges, enhance digital presence, and connect clients with top talent, all while fostering a culture of collaboration and excellence that drives growth and success for startups, SMEs, and enterprises alike.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
