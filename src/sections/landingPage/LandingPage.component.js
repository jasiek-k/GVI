import React from "react";

import Nav from "./components/nav/Nav.component";

import "./LandingPage.styles.scss";

const LandingPage = ({ changeLang, currentLang, sectionsRefs, roadsData }) => {
  return (
    <div className="landing-section">
      <div className="landing-section__navbar">
        <Nav
          currentLang={currentLang}
          refs={sectionsRefs}
          setLangCallback={changeLang}
        />
      </div>

      <div className="landing-section__content">
        <div>
          <span className="landing-section__content--title">
            ATLAS NOWOCZESNOŚCI
          </span>
          <span className="landing-section__content--subtitle">
            Kolekcja sztuki XX i XXI wieku
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
