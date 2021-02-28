/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef } from "react";

import LanguageService from "../../services/Language.service";
import generateLogo from "../../services/generateLogo";
// import useScrollTop from "../../services/useScrollTop";
// import generativeMechanism from "../../services/generativeMechanism";
import { DEFAULT_LANG } from "../../config";

import Footer from "../../sections/footer/Footer.component";
import GenerativeSection from "../../sections/generativeSection/GenerativeSection.component";
import InformationSection from "../../sections/informationSection/InformationSection.component";
import LandingPage from "../../sections/landingPage/LandingPage.component";
import ResourceSection from "../../sections/resourceSection/ResourceSection.component";
import PhotoSection from "../../sections/photoSection/PhotoSection.component";
import CustomHead from '../common/customHead/CustomHead.component';

import "./OnePager.styles.scss";

const OnePager = () => {
  const [currentLang, setLang] = useState(DEFAULT_LANG);
  const [logoInfo, setLogoInfo] = useState(generateLogo());
  const infoRef = useRef();
  const generativeRef = useRef();
  const photoRef = useRef();
  const resourceRef = useRef();
  // const generated = generativeMechanism();
  
  const getNewLogo = useCallback(() => {
    setLogoInfo(generateLogo());
  }, []);

  const changeLang = useCallback((item) => {
    localStorage.setItem("atlasLang", item);
    setLang(item);
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem("atlasLang");

    if (!lang) {
      changeLang(currentLang);
    } else if (lang !== currentLang) {
      changeLang(lang);
    }
  }, [currentLang, changeLang]);

  return (
    <LanguageService currentLang={currentLang}>
      <div className="one-pager">
        <CustomHead />
        <LandingPage
          sectionsRefs={[infoRef, generativeRef, photoRef, resourceRef]}
          changeLang={changeLang}
          currentLang={currentLang}
          data={logoInfo}
        />
        <InformationSection ref={infoRef} />
        <GenerativeSection data={logoInfo} getLogo={getNewLogo} ref={generativeRef} />
        <PhotoSection ref={photoRef} />
        <ResourceSection ref={resourceRef} />
        <Footer />
      </div>
    </LanguageService>
  );
};

export default OnePager;
