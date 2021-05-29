import React from "react";
import '../styles/AboutMe.css';
import '../App.css';

function AboutMe() {
  return (
    <section className="about section" id="about">
      <span className="section-subtitle">My intro</span>
      <h2 className="section-title">About Me</h2>

      <div className="about__container bd-grid">
        <div className="about__data">
          <p className="about__description">
            Hi, I'm a developer, passionate about creating and developing web
            and mobil apps.
          </p>
          <img src="assets/img/about.png" alt="" className="about__img" />
        </div>

        <div>
          <div className="about__information">
            <h3 className="about__information-title">Information</h3>

            <div className="about__information-data">
              <i className="bx bx-user about__information-icon"></i>
              <span>Yüksel Can Şimşek</span>
            </div>

            <div className="about__information-data">
              <i className="bx bx-envelope about__information-icon"></i>
              <span>yukselcansimsek@gmail.com</span>
            </div>

            <div className="about__information-data">
              <i className="bx bxl-github about__information-icon"></i>
              <span>github.com/yuksi-root</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
