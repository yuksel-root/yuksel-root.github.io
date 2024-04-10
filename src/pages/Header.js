<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/Header.css";
import "../App.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState("0");
  
  return (
    <header className={isNavOpen ? "nav-open" : ""}>
      <div className="l-header">
        <nav className="nav bd-grid">
          <button
            className="nav__toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>

          <div onClick={() => setIsNavOpen(!isNavOpen)}>
            <a href="# " className="nav__logo" onClick={() => setIsActive("0")}>
              Yüksel
            </a>
          </div>

          <div className="nav__menu">
            <button
              className="nav__close"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav__list">
              <li className="nav__item" onClick={() => setIsActive("0")}>
                <a
                  href="#home"
                  className={
                    isActive === "0" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Home
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("1")}>
                <a
                  href="#about"
                  className={
                    isActive === "1" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  About
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("2")}>
                <a
                  href="#works"
                  className={
                    isActive === "2" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Projects
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("3")}>
                <a
                  href="#contact"
                  className={
                    isActive === "3" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
=======
import React, { useState } from "react";
import "../styles/Header.css";
import "../App.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isActive, setIsActive] = useState("0");
  
  return (
    <header className={isNavOpen ? "nav-open" : ""}>
      <div className="l-header">
        <nav className="nav bd-grid">
          <button
            className="nav__toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>

          <div onClick={() => setIsNavOpen(!isNavOpen)}>
            <a href="# " className="nav__logo" onClick={() => setIsActive("0")}>
              Yüksel
            </a>
          </div>

          <div className="nav__menu">
            <button
              className="nav__close"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className="bx bx-x"></i>
            </button>

            <ul className="nav__list">
              <li className="nav__item" onClick={() => setIsActive("0")}>
                <a
                  href="#home"
                  className={
                    isActive === "0" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Home
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("1")}>
                <a
                  href="#about"
                  className={
                    isActive === "1" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  About
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("2")}>
                <a
                  href="#works"
                  className={
                    isActive === "2" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Projects
                </a>
              </li>

              <li className="nav__item" onClick={() => setIsActive("3")}>
                <a
                  href="#contact"
                  className={
                    isActive === "3" ? "nav__link active" : "nav__link"
                  }
                  onClick={() => setIsNavOpen(!isNavOpen)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
>>>>>>> 1bcfb92849dad7ad143d7b07a2c276a874934989
