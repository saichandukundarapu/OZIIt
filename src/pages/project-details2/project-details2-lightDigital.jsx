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
          backgroundImage: "url('/img/IMG14.png')",
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
            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Digital Marketing.</h1>
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
              src="/img/IMG15.jpg"
              alt="Project Visual"
              style={{ width: "100%", maxWidth: "350px", height: "auto", borderRadius: "", boxShadow: "" }}
            />
          </div>

          {/* Text */}
          <div style={{ flex: "2 1 500px" }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px",color: "" }}>Digital Marketing</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
            Ozi’s digital marketing services empower businesses with AI-driven strategies to amplify online presence and drive growth for startups, SMEs, and enterprises. Leveraging advanced platforms like Google Marketing Platform and AI tools such as PyTorch for data analysis, we craft personalized campaigns, optimize content, and enhance customer engagement tailored to your brand’s goals. Our expert team collaborates closely with clients to integrate seamless solutions, from targeted ads to social media management, ensuring adaptability and measurable results across all digital channels.
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
            <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "" }}>Marketing Approach</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#444" }}>
            Our marketing approach focuses on delivering impactful results through a strategic process from research to execution. We utilize tools like SEMrush and Mailchimp to analyze market trends and automate email campaigns, supported by cloud infrastructure like AWS for scalable data processing. Security is ensured with encrypted data handling and AI-powered fraud detection, enabling Ozi to provide efficient, innovative digital marketing solutions that boost conversions and brand loyalty, whether for SEO optimization or PPC campaigns.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.7", marginTop: "20px", color: "#444" }}>
              
            </p>
          </div>

          {/* Image */}
          <div style={{ flex: "1 1 400px", marginTop: "30px" }}>
            <img
              src="/img/IMG16.jpg"
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
              src="/img/IMG19.jpg"
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
                Targeted Advertising: Uses AI to deliver precise ads tailored to specific audience segments.
                </li>
              


              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Content Personalization: Employs machine learning to create customized content for higher engagement.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Scalable Performance: Built on cloud infrastructure like Google Cloud for effortless scaling.
              </li>
              <li style={{ marginBottom: "12px" }}>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Scalable Campaigns: Built on cloud platforms like Azure for flexible campaign scaling.
              </li>
              <li>
                <span style={{ color: "orange", marginRight: "10px" }}>✓</span>
                Multi-Channel Reach: Supports seamless marketing across social media, email, and search engines.
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
