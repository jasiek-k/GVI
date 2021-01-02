import React, { useState, useEffect, useCallback, useRef } from "react";

import LanguageService from "../../services/Language.service";
import useAlgorithm from "../../services/useAlgorithm";
import useScrollTop from "../../services/useScrollTop";
import { DEFAULT_LANG } from "../../config";
import Footer from "../footer/Footer.component";
import PhotosGrid from "../photosGrid/PhotosGrid.component";
import GenerativeSection from "../../sections/generativeSection/GenerativeSection.component";
import InformationSection from "../../sections/informationSection/InformationSection.component";
import LandingPage from "../../sections/landingPage/LandingPage.component";
import ResourceSection from "../../sections/resourceSection/ResourceSection.component";

import "./OnePager.styles.scss";

const OnePager = () => {
  const [currentLang, setLang] = useState(DEFAULT_LANG);
  const infoRef = useRef();
  const generativeRef = useRef();
  const photoRef = useRef();
  const resourceRef = useRef();
  const sectionsRefs = [infoRef, generativeRef, photoRef, resourceRef];
  // useAlgorithm();
  // useScrollTop();

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
        <LandingPage sectionsRefs={sectionsRefs} changeLang={changeLang} currentLang={currentLang} />
        <InformationSection ref={infoRef} />
        <GenerativeSection ref={generativeRef} />
        <PhotosGrid ref={photoRef} />
        <ResourceSection ref={resourceRef} />
        <Footer />
      </div>
    </LanguageService>
  );
};

export default OnePager;
