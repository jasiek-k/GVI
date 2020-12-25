import React from "react";
import Nav from "./components/nav/Nav.component";

const LandingPage = ({ changeLang }) => {
  return (
    <div>
      <Nav setLangCallback={changeLang} />
      <main>ATLAS NOWOCZESNOŚCI</main>
    </div>
  );
};

export default LandingPage;
