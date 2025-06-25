import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        minHeight: "100vh",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Navbar
        nr={navRef}
        lr={logoRef}
        theme="themeL"
        isDark={false}
        toggleTheme={() => {}}
      />

      <main>{children}</main>
    </div>
  );
};

export default AppLayout;
