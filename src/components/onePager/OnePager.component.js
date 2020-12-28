import React, { useState, useEffect, useCallback, useRef } from "react";

import LanguageService from "../../services/Language.service";
import useAlgorithm from "../../services/useAlgorithm";
import { DEFAULT_LANG } from "../../config";
import Footer from "../footer/Footer.component";
import PhotosGrid from "../photosGrid/PhotosGrid.component";
import MediaBar from "../mediaBar/MediaBar.component";
import QuoteFrame from "../quoteFrame/QuoteFrame.component";
import GenerativeSection from "../../sections/generativeSection/GenerativeSection.component";
import InformationSection from "../../sections/informationSection/InformationSection.component";
import LandingPage from "../../sections/landingPage/LandingPage.component";
import ResourceSection from "../../sections/resourceSection/ResourceSection.component";

import "./OnePager.styles.scss";

const OnePager = () => {
  const [currentLang, setLang] = useState(DEFAULT_LANG);
  const mediaBarRef = useRef();
  useAlgorithm();

  useEffect(() => {
    const lang = localStorage.getItem("atlasLang");
    if (lang !== "" || lang !== currentLang) {
      setLang(lang);
    }
  }, [currentLang]);

  useEffect(() => {
    console.log(window);
    if (window.scrollY !== 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  const changeLang = useCallback((item) => {
    localStorage.setItem("atlasLang", item);
    setLang(item);
  }, []);

  const handleScroll = useCallback((ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <LanguageService currentLang={currentLang}>
      <div className="one-pager">
        <button
          onClick={() =>
            mediaBarRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          scroll
        </button>
        <LandingPage handleScroll={handleScroll} changeLang={changeLang} />
        <QuoteFrame />
        <InformationSection />
        <GenerativeSection />
        <PhotosGrid />
        <MediaBar ref={mediaBarRef} />
        {console.log(mediaBarRef)}
        <ResourceSection />
        <Footer />
      </div>
    </LanguageService>
  );
};

export default OnePager;
