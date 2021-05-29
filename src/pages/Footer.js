import React from "react";
import '../styles/Footer.css';
import '../App.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <h1 className="footer__title">Yüksel Can Şimşek</h1>
        <p className="footer__description">
          yukselcansimsek@gmail.com
        </p>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/yuksi-root/"
            className="footer__link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/yuksi-root" className="footer__link">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://twitter.com/yuksi_root" className="footer__link">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="mailto:yukselcansimsek@gmail.com" className="footer__link">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
