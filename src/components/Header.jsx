import React, { useState, useEffect, useRef } from "react";

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
      <header className="main-header">
         <section className="logo-section">
            <section className="logo-box">
               <img src="" alt="Logo" />
            </section>
         </section>

         <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Objectives</a>
            <a href="#">Events</a>
            <a href="#">Sponsor</a>
            <a href="#">Partners</a>
            <a href="#">Gallery</a>
            <a href="#">Contact Us</a>
         </nav>
      </header>
   );
};

export default Navbar;
