import React, { useEffect, useState, useRef } from 'react';
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from '../../../assets/images';

import { LANDING_TRANSITION_TIME } from '../../../config';
import { getRandomInteger } from '../../../services/helpers';

const photosArray = [photo1, photo2, photo3, photo4, photo5, photo6];

const LandingSlider = () => {
  const [photosToDisplay, setPhotos] = useState(photosArray.filter((_item, index) => index !== 0));
  const [displayedPhoto, setDisplayedPhoto] = useState(photosToDisplay[0])
  const photoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (photoRef.current) photoRef.current.classList.add('animated');

      await new Promise(resolve => setTimeout(resolve, 1000));

      if (!photosToDisplay.length) {
        const arrayCopy = [...photosArray];
        const drawnIndex = getRandomInteger(0, arrayCopy.length - 1);

        setPhotos(arrayCopy);
        setDisplayedPhoto(arrayCopy[drawnIndex]);
        setPhotos(arrayCopy.filter((_item, index) => index !== drawnIndex));
      } else {
        const drawnIndex = getRandomInteger(0, photosToDisplay.length - 1);

        setDisplayedPhoto(photosToDisplay[drawnIndex]);
        setPhotos(photosToDisplay.filter((_item, index) => index !== drawnIndex));
      }

      if (photoRef.current) photoRef.current.classList.remove('animated');
    }, LANDING_TRANSITION_TIME);

    return () => clearInterval(interval);
  }, [photosToDisplay]);

  return <img ref={photoRef} src={displayedPhoto} className="landing-section__content--image" alt="" />
};

export default LandingSlider;
