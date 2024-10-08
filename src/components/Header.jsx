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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#objective">Objectives</a>
            <a href="#event">Events</a>
            <a href="#sponsor">Sponsor</a>
            <a href="#contact">Contact Us</a>
         </nav>

         <section className="hamburger-icon" ref={hamburgerRef} onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
         </section>
      </header>
   );
};

export default Navbar;
