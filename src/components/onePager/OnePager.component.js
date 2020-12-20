import React, { useState, useEffect, useCallback } from "react";

import LanguageService from "../../Language.service";
import Footer from "../footer/Footer.component";
import PhotosGrid from "../photosGrid/PhotosGrid.component";
import MediaBar from "../mediaBar/MediaBar.component";
import { DEFAULT_LANG } from "../../config";
import useAlgorithm from "../../useAlgorithm";

import "./OnePager.styles.scss";
import LandingPage from "../landingPage/LandingPage.component";
import QuoteFrame from "../quoteFrame/QuoteFrame.component";
import InformationSection from "../informationSection/InformationSection.component";
import GenerativeSection from "../generativeSection/GenerativeSection.component";

const OnePager = () => {
  const [currentLang, setLang] = useState(DEFAULT_LANG);
  useAlgorithm();

  useEffect(() => {
    const lang = localStorage.getItem("atlasLang");
    if (lang !== "") {
      setLang(lang);
    }
  }, []);

  const changeLang = useCallback((item) => {
    localStorage.setItem("atlasLang", item);
    setLang(item);
  }, []);

  return (
    <LanguageService currentLang={currentLang}>
      <div className="onePager">
        <LandingPage changeLang={changeLang} />
        <QuoteFrame />
        <InformationSection />
        <GenerativeSection />
        <PhotosGrid className="onePager__section" />
        <MediaBar />
        <Footer />
      </div>
    </LanguageService>
  );
};

export default OnePager;
