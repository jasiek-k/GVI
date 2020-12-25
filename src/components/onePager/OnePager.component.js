import React, { useState, useEffect, useCallback } from "react";

import LanguageService from "../../Language.service";
import Footer from "../footer/Footer.component";
import PhotosGrid from "../photosGrid/PhotosGrid.component";
import MediaBar from "../mediaBar/MediaBar.component";
import { DEFAULT_LANG } from "../../config";
import useAlgorithm from "../../useAlgorithm";
import QuoteFrame from "../quoteFrame/QuoteFrame.component";

import GenerativeSection from "../../sections/generativeSection/GenerativeSection.component";
import InformationSection from "../../sections/informationSection/InformationSection.component";
import LandingPage from "../../sections/landingPage/LandingPage.component";
import ResourceSection from "../../sections/resourceSection/ResourceSection.component";

import "./OnePager.styles.scss";

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
        <PhotosGrid />
        <MediaBar />
        <ResourceSection />
        <Footer />
      </div>
    </LanguageService>
  );
};

export default OnePager;
