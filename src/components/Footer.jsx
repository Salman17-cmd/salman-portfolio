import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Salman Sadiq. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/Salman17-cmd" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github"></i></a>
          <a href="https://linkedin.com/in/salman-sadiq-ab58a4248" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer"><i className="bx bxl-youtube"></i></a>
          <a href="https://www.instagram.com/salmansadiq12/?hl=en" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
          <a href="https://www.facebook.com/salman.sadiq.7923" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
          <a href="https://wa.me/923034736071" target="_blank" rel="noopener noreferrer"><i className="bx bxl-whatsapp"></i></a>
        </div>

        <div className="footer-iconTop">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </div>
    </footer>
  );
}
