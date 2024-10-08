import React, { useEffect, useRef, useState } from "react";

import "/src/assets/css/components/header.css";

function Navbar() {
   const [navToggle, setNavToggle] = useState(false);
   const navRef = useRef(null);
   const hamburgerRef = useRef(null);

   const toggleNav = () => {
      setNavToggle(!navToggle);
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (navRef.current && 
            !navRef.current.contains(event.target) &&
            hamburgerRef.current && 
            !hamburgerRef.current.contains(event.target)) {
         setNavToggle(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <header className="main-header">
         <section className="logo-section">
            <section className="logo-box">
               <img src="logos/rivers-logo.png" alt="Rivers Carnival Logo" />
            </section>

            <span>Rivers <br /> Carnival</span>
         </section>

         <nav className={`mobile-menu ${navToggle ? "nav nav-open" : "nav"}`} ref={navRef}>
            <a href="#home" onClick={toggleNav}>Home</a>
            <a href="#about" onClick={toggleNav}>About</a>
            <a href="#objective" onClick={toggleNav}>Objectives</a>
            <a href="#event" onClick={toggleNav}>Events</a>
            <a href="#sponsor" onClick={toggleNav}>Sponsor</a>
            <a href="#contact" onClick={toggleNav}>Contact Us</a>
         </nav>

         <section className="hamburger-icon" ref={hamburgerRef} onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
         </section>
      </header>
   );
};

export default Navbar;
