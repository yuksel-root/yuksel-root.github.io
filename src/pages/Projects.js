import React from "react";
import "../styles/Projects.css";
import "../App.css";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";

function Projects() {
  return (
    <section className="works section" id="works">
      <span className="section-subtitle">Recent Works</span>
      <h2 className="section-title">My Projects</h2>

      <div className="works__container bd-grid">
        <div className="works__item">
          <img className="works__img" src={work1} alt="" />

          <div className="works__data">
            <a
              href="https://github.com/yuksel-root/Parking-App"
              className="works__link"
            >
              <i className="bx bx-link"></i>
            </a>
            <span className="works__title">Car Parking Net Core App</span>
          </div>
        </div>

        <div className="works__item">
          <img className="works__img" src={work2} alt="" />

          <div className="works__data">
            <a
              href="https://github.com/yuksel-root/EnglishWord"
              className="works__link"
            >
              <i className="bx bx-link"></i>
            </a>
            <span className="works__title">EnglishWord Android App</span>
          </div>
        </div>

        <div className="works__item">
          <img className="works__img" src={work3} alt="" />

          <div className="works__data">
            <a
              href="https://github.com/yuksel-root/english-notebook-redux"
              className="works__link"
            >
              <i className="bx bx-link"></i>
            </a>
            <span className="works__title">English Notebook React App</span>
          </div>
        </div>

        <div className="works__item">
          <img className="works__img" src={work4} alt="" />

          <div className="works__data">
            <a
              href="https://github.com/yuksel-root/LaboratuvarAnalizTakip"
              className="works__link"
            >
              <i className="bx bx-link"></i>
            </a>
            <span className="works__title">LabAnaliz Android App</span>
          </div>
        </div>

        <div className="works__item5">
          <img className="works__img" src={work5} alt="" />

          <div className="works__data">
            <a
              href="https://github.com/yuksel-root/BirdGame"
              className="works__link"
            >
              <i className="bx bx-link"></i>
            </a>
            <span className="works__title">BirdGame Android App</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
