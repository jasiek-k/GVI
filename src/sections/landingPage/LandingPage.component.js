import React from "react";

import Nav from "./components/nav/Nav.component";

import "./LandingPage.styles.scss";

const LandingPage = ({ changeLang, currentLang, sectionsRefs }) => {
  //console.log(sectionsRefs);

  return (
    <div className="landing-section">
      <main className="title">ATLAS NOWOCZESNOŚCI</main>
      <Nav
        currentLang={currentLang}
        refs={sectionsRefs}
        setLangCallback={changeLang}
      />
    </div>
  );
};

export default LandingPage;
