// import "/src/assets/css/components/footer.css";

// import React, { useEffect, useRef, useState } from "react";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p className="powered-by">Powered By:</p>
//         <img src="/images/B-brand logo.jpeg" alt="B-Brand Media Company Logo" className="company-logo" />
//         <p className="copyright">Copyright © 2024 All rights reserved | Rivers Carnival</p>
//         <div className="social-icons">
//             <a href="https://facebook.com/Rivcomabuja/" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-facebook"></i>
//             </a>
//             <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-instagram"></i>
//             </a>
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//               <i className="fa-brands fa-twitter"></i>
//             </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import "/src/assets/css/components/footer.css";
import React, { useState } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        
        <div className="left-footer">
          <img src="logos/rivers-logo.png" alt="B-Brand Media Company Logo" className="company-logo" />
          <p className="heritage-text">Celebrating our diversity and rich cultural heritage</p>
        </div>


        <div className="middle-footer">
          <div className="footer-column col-a">
            <h4>Explore</h4>
            <ul>
              <li><a href="#event">Events</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#sponsor">Sponsorship</a></li>
            </ul>
          </div>
          <div className="footer-column col-b">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="right-footer">
          <h4>Newsletter</h4>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
          
          <div className="social-icons">
            <a href="https://facebook.com/Rivcomabuja/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p className="copyright">Copyright © 2024 All rights reserved | Rivers Carnival</p>
      </div>
    </footer>
  );
}

export default Footer;
