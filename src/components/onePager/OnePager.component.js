import React, { useEffect, useState, useCallback } from 'react';

import LanguageService from '../../Language.service';
import Footer from '../footer/Footer.component';
import PhotosGrid from '../photosGrid/PhotosGrid.component';
import MediaBar from '../mediaBar/MediaBar.component';
import Nav from '../nav/Nav.component';
import { DEFAULT_LANG } from '../../config';

import './OnePager.styles.scss';

const OnePager = () => {
  const [currentLang, setLang] = useState(DEFAULT_LANG);

  useEffect(() => {
    const lang = localStorage.getItem('atlasLang');
    if (lang !== '') {
      setLang(lang);
    }
  }, []);

  const setLangCallback = useCallback((item) => {
    localStorage.setItem('atlasLang', item);
    setLang(item);
  }, []);

  return (
    <LanguageService choosenLang={currentLang}>
      <div className="onePager">
        <main>ATLAS NOWOCZESNOŚCI</main>
        <Nav setLangCallback={setLangCallback} />
        <PhotosGrid className="onePager__section" />
        <MediaBar className="onePager__section" />
        <Footer />
      </div>
    </LanguageService>
  );
}

export default OnePager;
