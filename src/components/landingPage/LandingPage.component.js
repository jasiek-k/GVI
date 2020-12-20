import React from "react";
import Nav from "../nav/Nav.component";

const LandingPage = ({ changeLang }) => {
  return (
    <div>
      <Nav setLangCallback={changeLang} />
      <main>ATLAS NOWOCZESNOŚCI</main>
    </div>
  );
};

export default LandingPage;
