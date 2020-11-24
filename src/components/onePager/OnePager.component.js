import React from 'react';

import Footer from '../footer/Footer.component';
import PhotosGrid from '../photosGrid/PhotosGrid.component';
import MediaBar from '../mediaBar/MediaBar.component';

import './OnePager.styles.scss';

const OnePager = () => {
  return (
    <div className="onePager">
      <main>ATLAS NOWOCZESNOŚCI</main>
      <PhotosGrid className="onePager__section" />
      <MediaBar className="onePager__section" />
      <Footer />
    </div>
  );
}

export default OnePager;
