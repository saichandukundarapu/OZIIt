import React from 'react'
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import appData from '../../data/app.json'
import ProjectDetails2Header from "../../components/Project-details2-headerML";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails2LightML = () => {
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
          backgroundImage: "url('/img/IMG6.PNG')",
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
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>AI and Machine Learning.</h1>
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
              src="/img/IMG7.JPG"
              alt="Project Visual"
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "", boxShadow: "" }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2 1 500px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px",color: "" }}>AI and Machine Learning</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
            Ozi’s AI and machine learning services empower businesses with intelligent, data-driven solutions that enhance web and app development, digital marketing, and IT staffing for startups, SMEs, and enterprises. Leveraging advanced frameworks like TensorFlow and PyTorch, combined with cutting-edge algorithms, we design custom AI models that optimize processes, personalize user experiences, and provide actionable insights. Our expert team collaborates closely with clients to integrate these solutions seamlessly, ensuring scalability, accuracy, and innovation, while continuously adapting to emerging trends and business needs.
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
            Our development approach focuses on building robust AI and machine learning systems through a structured, iterative process from data collection to deployment. We utilize tools like scikit-learn and Keras to develop and train models, employing cloud platforms like AWS for scalable computing power and real-time processing. Security and efficiency are prioritized with encrypted data pipelines and automated model updates, enabling Ozi to deliver reliable AI solutions that enhance decision-making and operational efficiency, whether for predictive analytics or automated workflows.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px", color: "#444" }}>
              
            </p>
          </div>

          {/* Image */}
          <div style={{ flex: "1 1 400px", marginTop: "30px" }}>
            <img
              src="/img/IMG9.jpg"
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
              src="/img/IMG8.jpg"
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
                Custom AI Models: Develops tailored machine learning solutions to address specific business challenges and goals.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Real-Time Insights: Provides dynamic data analysis with AI tools for immediate, actionable outcomes.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Scalable Architecture: Built on cloud infrastructure like Azure for flexible scaling as demand grows.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Enhanced Accuracy: Utilizes advanced algorithms to improve prediction and classification accuracy.
              </li>
              <li>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Automated Learning: Implements continuous learning systems to adapt to new data and trends.
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

export default ProjectDetails2LightML
