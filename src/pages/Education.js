import React from "react";
import '../styles/Education.css';
import '../App.css';

function Education() {
  return (
    <section className="education section">
      <span className="section-subtitle">Qualification</span>
      <h2 className="section-title">My Education</h2>

      <div className="education__container bd-grid">
        <div className="education__content">
          <div>
            <h3 className="education__year">2017 - 2022</h3>
            <span className="education__university">
              Karadeniz Technical University
            </span>
          </div>

          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>

          <div>
            <h3 className="education__race">Statistics and Computer Sciences</h3>
            <span className="education__specialty">Bachelor Degree</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
