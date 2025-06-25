/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme, isDark, toggleTheme }) => {
  React.useEffect(() => {
   
  }, []);

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo" style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",              // Space between logo and text
      textDecoration: "none"
    }}>
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo-img" style={{ height: "50px", width: "auto" }} />
                
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo-img"  style={{ height: "50px", width: "auto" }} />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo-img"  style={{ height: "50px", width: "auto" }}/>
            )}
            <span style={{ color: "white ", fontSize: "18px", fontWeight: "600"}}>
      SOFTWARE SOLUTIONS
    </span>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
  <Link href="/home/home1-light">
    <a className="nav-link">Home</a>
  </Link>
</li>

           

            <li className="nav-item">
              <Link href="/about/about-light"><a className="nav-link">About</a></Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span className="nav-link dropdown-toggle" data-toggle="dropdown">
                services
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home2-light"><a className="dropdown-item">full services</a></Link>
                <Link href="/project-details2/project-details2-lightML"><a className="dropdown-item">AI & ML</a></Link>
                <Link href="/project-details2/project-details2-light"><a className="dropdown-item">WEBSITE DEVELOPMENT.</a></Link>
                <Link href="/project-details2/project-details2-lightAPP"><a className="dropdown-item">APP DEVELOPMENT</a></Link>
                <Link href="/project-details2/project-details2-lightAPP"><a className="dropdown-item">APP DEVELOPMENT</a></Link>
                <Link href="/project-details2/project-details2-lightDigital"><a className="dropdown-item">Digital Marketing.</a></Link>


                
              </div>
            </li>

            <li className="nav-item">
              <Link href="/contact/contact-light"><a className="nav-link">Contact</a></Link>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          

        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
