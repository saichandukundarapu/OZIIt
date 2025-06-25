import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import addParlx from "../../common/addParlx";
import SmallFooter from "../../components/Small-footer";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";

const Works3Light = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
    window.addEventListener("load", () => {
      setTimeout(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
          if (MainContent.current) {
            MainContent.current.style.marginTop = slidHeight + "px";
          }
        }
      }, 0);
    });
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Our Services, tools and technologies</h2>
                  <p>
                  Ozi leverages a robust set of tools and technologies to power its digital marketing framework, ensuring effective campaigns and measurable results
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <PortfolioCustomColumn column={2} hideFilter hideSectionTitle />
        <SmallFooter />
      </div>
    </LightTheme>
  );
};

export default Works3Light;
