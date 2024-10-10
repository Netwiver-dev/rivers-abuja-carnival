import "/src/assets/css/components/footer.css";

import React, { useEffect, useRef, useState } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="powered-by">Powered By:</p>
        <img src="/images/B-brand logo.jpeg" alt="B-Brand Media Company Logo" className="company-logo" />
        <p className="copyright">Copyright © 2024 All rights reserved | Rivers Carnival</p>
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
    </footer>
  );
}

export default Footer;