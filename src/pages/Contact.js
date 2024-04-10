import React from "react";
import '../styles/Contact.css';
import '../App.css';

function Contacts() {
  return (
    <section className="contact section" id="contact">
      <span className="section-subtitle">Contact Informations</span>
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container bd-grid">
        <div className="contact__info">
          <h3 className="contact__subtitle">
            <a href="mailto:yukselcansimsek@gmail.com" className="home__social-link">
              <i className="bx bx-envelope"></i>
            </a>
            E-mail
          </h3>
          <span className="contact__text">yukselcansimsek@gmail.com</span>
        </div>

        <div className="contact__info">
          <h3 className="contact__subtitle">
            <a href="https://www.linkedin.com/in/yukselcansimsek/" className="home__social-link">
              <i className="bx bxl-linkedin"></i>
            </a>
            Linkedin
          </h3>
          <span className="contact__text">https://www.linkedin.com/in/yukselcansimsek/</span>
        </div>

        <div className="contact__info">
          <h3 className="contact__subtitle">
            <a href="# " className="home__social-link">
              <i className="bx bx-current-location"></i>
            </a>
            Location
          </h3>
          <span className="contact__text">Turkey - Bursa</span>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
