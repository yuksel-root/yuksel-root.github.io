import React from "react";
import "../styles/Home.css";
import "../App.css";

import pp from "../assets/pp2.png";
function Home() {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid">
        <div className="home__data">
          <div className="home__img">
            <img src={pp} alt="" />
          </div>
          <div>
            {" "}
            <i className="fa fa-github-square" aria-hidden="true" />
          </div>
          <h1 className="home__title">Yüksel Can Şimşek</h1>
          <span className="home__profession">Developer</span>

          <div className="home__social">
            <a
              href="https://github.com/yuksi-root"
              className="home__social-link"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yukselcansimsek/"
              className="home__social-link"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/yuksi_root"
              className="home__social-link"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="mailto:yukselcansimsek@gmail.com"
              className="home__social-link"
            >
              <i className="bx bx-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
