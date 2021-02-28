import React from "react";
import { FormattedMessage } from 'react-intl';

import GenerativeLogo from "../../components/generativeLogo/GenerativeLogo.component";
import Nav from "./components/nav/Nav.component";
import { landingPhoto } from '../../assets/images';
import { MSLogo } from '../../assets/Icons';

import "./LandingPage.styles.scss";

// TO DO: tablet size
const logoConfig = {
  mobile: 70,
  tablet: 80,
  desktop: 90 
}

const LandingPage = ({ changeLang, currentLang, sectionsRefs, data: { roadsData } }) => {

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
            <GenerativeLogo roadsData={roadsData} config={logoConfig} reverseColors={false} />
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
            <FormattedMessage id="landing:title" />
          </span>
          <span className="landing-section__content--header--subtitle">
            <FormattedMessage id="landing:subtitle" />
          </span>
        </div>
        <img src={landingPhoto} className="landing-section__content--image" alt="" />
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
