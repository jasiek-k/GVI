import React, { useState, useCallback, useEffect } from "react";

import PhotoModal from "../photoModal/PhotoModal.component";
import { galleryContentArray } from "../../data/data";

import "./PhotosGrid.styles.scss";

const LEFT_ARROW_CODE = 37;
const RIGHT_ARROW_CODE = 39;

const PhotosGrid = React.forwardRef((props, ref) => {
  const [photoId, setPhoto] = useState(null);

  const switchPhoto = currentId => {
    if (currentId < 0) currentId = galleryContentArray.length - 1;
    else if (currentId > (galleryContentArray.length - 1)) currentId = 0;
    console.log(currentId)
    setPhoto(galleryContentArray[currentId].id);
  };

  const arrowsHandler = (key) => {
    switch (key.keyCode) {
      case LEFT_ARROW_CODE:
        switchPhoto(photoId - 1);
        break;
      case RIGHT_ARROW_CODE:
        switchPhoto(photoId + 1);
        break;
      default:
        console.log();
    }
  };

  //useEffect(() => {
  //window.addEventListener("keydown", arrowsHandler);

  //return window.removeEventListener("keydown", press => arrowsHandler(press))
  //}, [arrowsHandler]);

  const displayModal = id => setPhoto(galleryContentArray[id].id);

  const closeModal = () => setPhoto(null);

  return (
    <div ref={ref} className="grid-section">
      <div className="grid-section__content">
        {galleryContentArray.map((item) => (
          <img
            className={`grid-section__content--item ${item.id > 2 ? 'margin' : ''}`}
            src={item.cropped}
            alt=""
            id={item.id}
            key={item.id}
            onClick={() => displayModal(item.id)}
          />
        ))}
      </div>
      {
        photoId !== null && (
          <>
            <PhotoModal
              currentPhoto={photoId}
              modalPhotos={galleryContentArray}
              closeModal={closeModal}
              switchPhoto={switchPhoto}
            />
          </>
        )}
    </div>
  );
});

export default PhotosGrid;
