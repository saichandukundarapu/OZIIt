import React from 'react'
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import appData from '../../data/app.json'
import ProjectDetails2Header from "../../components/Project-details2-header";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails2Light = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
          logo.setAttribute("src", appData.darkLogo);
        } else {
          navbar.classList.remove("nav-scroll");
          logo.setAttribute("src", appData.lightLogo);
        }
      });
    }, [navbarRef]);
    return (
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        
       
        <header
        className="project-header"
        style={{
          position: "relative",
          backgroundImage: "url('/img/IMG10.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 0 120px",
          textAlign: "center",
          color: "#fff",
          zIndex: 1
        }}
      >
        {/* Dim overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 0
        }}></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="container">
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>APP DEVELOPMENT.</h1>
            <p style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
              
            </p>
          </div>
        </div>
      </header>
          {/* Description with image beside text */}
      <section className="project-description" style={{ padding: "80px 20px" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }}>
          
          {/* Image */}
          <div style={{ flex: "1 1 300px", marginRight: "40px" }}>
            <img
              src="/img/IMG11.jpg"
              alt="Project Visual"
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "", boxShadow: "" }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2 1 500px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px",color: "" }}>APP Development</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
            Ozi’s mobile app development services empower businesses with innovative, user-focused applications that enhance engagement and efficiency for startups, SMEs, and enterprises. Utilizing advanced frameworks like Flutter and React Native, combined with AI tools such as TensorFlow for intelligent feature integration, we create custom, scalable mobile apps tailored to your brand’s vision. Our expert team collaborates closely with clients to incorporate seamless functionalities, from personalized user interfaces to real-time analytics, ensuring adaptability and a superior mobile experience across all platforms.
            </p>

            <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px" }}>
              
            </p>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
        <div className="container" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {/* Text */}
          <div style={{ flex: "1 1 500px", paddingRight: "30px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "" }}>Development Process</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#444" }}>
            Our development approach centers on crafting high-quality mobile apps through a meticulous process from ideation to deployment. We leverage tools like Node.js and Xcode to build and optimize apps, utilizing cloud platforms like AWS for scalable hosting and performance. Security is a priority with end-to-end encryption and regular updates, while AI-driven testing ensures reliability, enabling Ozi to deliver robust mobile solutions that streamline operations and enhance customer satisfaction, whether for e-commerce or internal tools.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px", color: "#444" }}>
              
            </p>
          </div>

          {/* Image */}
          <div style={{ flex: "1 1 400px", marginTop: "30px" }}>
            <img
              src="/img/IMG12.jpg"
              alt="Project Overview"
              style={{
                width: "100%",
                borderRadius: "",
                boxShadow: ""
              }}
            />
          </div>
        </div>
        </section>
          {/* Section 2 - Bullet Points + Right Image */}
          <section style={{ backgroundColor: "#ffffff", padding: "20px 20px" }}>
        
        </section>
        <section style={{ backgroundColor: "#ffffff", padding: "20px 20px" }}>
        <div className="container" style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto"
        }}>
          {/* Left Image */}
          <div style={{ flex: "1 1 400px", marginBottom: "30px" }}>
            <img
              src="/img/IMG13.jpg"
              alt="Project View"
              style={{
                width: "100%",
                borderRadius: "",
                boxShadow: ""
              }}
            />
          </div>

          {/* Right Bullet Points */}
          <div style={{ flex: "1 1 500px", paddingLeft: "30px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Core Advantages</h2>
            <ul style={{
              fontSize: "16px",
              lineHeight: "2",
              paddingLeft: "0",
              color: "#444",
              listStyle: "none"
            }}>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Custom App Design: Creates tailored mobile interfaces to meet specific business and user needs.
                </li>
              


              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Real-Time Functionality: Integrates AI-powered features for instant data updates and interactions.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Scalable Performance: Built on cloud infrastructure like Google Cloud for effortless scaling.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Cross-Platform Compatibility: Ensures seamless operation across iOS and Android devices.
              </li>
              <li>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Enhanced Security: Implements AI-driven encryption and secure authentication protocols.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 - Bullet Points + Right Image */}
      
       
        <SmallFooter />
      </LightTheme>
    );
}

export default ProjectDetails2Light
