import React from "react";

import Nav from "./components/nav/Nav.component";
import { landingPhoto } from '../../assets/images';
import { MSLogo } from '../../assets/Icons';

import "./LandingPage.styles.scss";

const LandingPage = ({ changeLang, currentLang, sectionsRefs, data }) => {
  return (
    <div className="landing-section">
      <div className="landing-section--wrapper">
      <div className="landing-section__navbar">
        <div className="landing-section__navbar__logos">
          <div className="landing-section__navbar__logos--ms">
          <div className="landing-section__navbar__logos--ms-wrapper">
            <MSLogo />
          </div>
          </div>
          <div className="landing-section__navbar__logos--generative">
            
          </div>
        </div>
        <div className="landing-section__navbar--nav">
        <Nav
          currentLang={currentLang}
          refs={sectionsRefs}
          setLangCallback={changeLang}
        />
        </div>
      </div>

      <div className="landing-section__content">
        <div className="landing-section__content--header">
          <span className="landing-section__content--header--title">
            ATLAS NOWOCZESNOŚCI
          </span>
          <span className="landing-section__content--header--subtitle">
            Kolekcja sztuki XX i XXI wieku
          </span>
        </div>
        <img src={landingPhoto} className="landing-section__content--image" alt="" />
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
