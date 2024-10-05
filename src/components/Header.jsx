import React, { useState, useEffect, useRef } from "react";

import { Menu, X } from "lucide-react";

import "/src/assets/css/components/header.css";

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const menuRef = useRef(null);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <nav className="navbar">
         <div className="navbar-container">
            <div className="navbar-logo">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#cf944c"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-earth"
                  className="logo-svg"
               >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
               </svg>
               <span className="logo-text">B-Brand Africa</span>
            </div>
            <div className="navbar-links">
               <a href="#home" className="nav-link">
                  Home
               </a>
               <a href="#about" className="nav-link">
                  About
               </a>
               <a href="#services" className="nav-link">
                  Services
               </a>
               <a href="#testimonials" className="nav-link">
                  Testimonials
               </a>
               <a href="tel:07031352324" className="contact-button">
                  Contact us
               </a>
            </div>
            <div className="mobile-menu-button" onClick={toggleMenu}>
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
         </div>
         <div ref={menuRef} className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="mobile-menu-header">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-earth"
                  className="logo-svg"
               >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
               </svg>
               <span className="logo-text">B-Brand Africa</span>
            </div>
            <div className="mobile-menu-links">
               <a href="#home" className="mobile-nav-link">
                  Home
               </a>
               <a href="#about" className="mobile-nav-link">
                  About
               </a>
               <a href="#services" className="mobile-nav-link">
                  Services
               </a>
               <a href="#testimonials" className="mobile-nav-link">
                  Testimonials
               </a>
            </div>
            <a href="tel:07031352324" className="mobile-contact-button">
               Contact us
            </a>
         </div>
      </nav>
   );
};

export default Navbar;
