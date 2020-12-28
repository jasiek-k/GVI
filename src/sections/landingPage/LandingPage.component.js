import React from "react";

import Nav from "./components/nav/Nav.component";

import "./LandingPage.styles.scss";

const LandingPage = ({ changeLang, handleScroll }) => {
  return (
    <div className="landing-section">
      <main className="title">ATLAS NOWOCZESNOŚCI</main>
      <Nav handleScroll={handleScroll} setLangCallback={changeLang} />
    </div>
  );
};

export default LandingPage;
