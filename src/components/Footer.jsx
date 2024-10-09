import "/src/assets/css/components/footer.css";

import React, { useEffect, useRef, useState } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="powered-by">Powered By:</p>
        <img src="/images/B-brand logo.jpeg" alt="B-Brand Media Company Logo" className="company-logo" />
        <p className="copyright">Copyright © 2024 All rights reserved | Rivers Carnival</p>
      </div>
    </footer>
  );
}

export default Footer;