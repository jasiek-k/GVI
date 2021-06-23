import React, { useState, useCallback } from "react";
import clsx from "clsx";

import PhotoModal from "../photoModal/PhotoModal.component";
import SectionHeader from "../sectionHeader/SectionHeader.component";
import { galleryContentArray } from "../../../data/data";
import { toggleBodyOverflow } from '../../../services/helpers'

import "./PhotosGrid.styles.scss";

const PhotosGrid = () => {
  const [photoId, setPhoto] = useState(null);

  const switchPhoto = (currentId) => {
    if (currentId < 0) currentId = galleryContentArray.length - 1;
    else if (currentId > galleryContentArray.length - 1) currentId = 0;

    setPhoto(galleryContentArray[currentId].id);
  };

  const toggleModal = useCallback((item) => { 
    if (photoId === null|| item === null) { 
      toggleBodyOverflow(); 
    }
    
    setPhoto(item)
  }, [photoId]);

  return (
    <div className="grid-section">
      <SectionHeader
        variant="fromRight"
        color="white"
        captionId="navbar:photos"
      />
      <div className="grid-section__content">
        {galleryContentArray.map((item) => (
          <img
            className={clsx("grid-section__content--item", {
              margin: item.id > 2,
            })}
            src={item.cropped}
            alt="Atlas of Modernity"
            id={item.id}
            key={item.id}
            onClick={() => toggleModal(galleryContentArray[item.id].id)}
          />
        ))}
      </div>
      {photoId !== null && (
        <PhotoModal
          currentPhoto={photoId}
          modalPhotos={galleryContentArray}
          toggleModal={toggleModal}
          switchPhoto={switchPhoto}
        />
      )}
    </div>
  );
};

export default PhotosGrid;
