import React, { useState, useCallback, useEffect } from "react";

import PhotoModal from "../photoModal/PhotoModal.component";
import { galleryContentArray } from "../../data/data";

import "./PhotosGrid.styles.scss";

const PhotosGrid = React.forwardRef((props, ref) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalDescription, setDescription] = useState("");
  const [modalPhoto, setPhoto] = useState(null);
  const [photoId, setPhotoId] = useState(null);

  const arrowsHandler = (key) => {
    switch (key.keyCode) {
      case 37:
        switchPhoto(-1);
        break;
      case 39:
        switchPhoto(1);
        break;
      default:
        console.log();
    }
    //console.log('test');
  };
  //arrow left 37 
  // arrow right 39
  const switchPhoto = (change) => {
    let newId = photoId + change % galleryContentArray.length;
    if (newId < 0) newId = galleryContentArray.length + change;

    const [photo] = galleryContentArray.filter((item) => item.id === (newId));
    setDescription(photo.description);
    setPhoto(photo.photo);
    setPhotoId(photo.id);
  }

  useEffect(() => {
    window.addEventListener("keydown", press => arrowsHandler(press));

    return window.removeEventListener("keydown", arrowsHandler);
  }, []);

  const displayModal = useCallback(id => {
    const [photo] = galleryContentArray.filter((item) => item.id === id);

    toggleModal(true, photo.description, photo.photo, id);
  }, []);

  const closeModal = useCallback(() => {
    toggleModal(false, "", null, null);
  }, []);

  const toggleModal = (status, desc, photo, id) => {
    setModalStatus(status);
    setDescription(desc);
    setPhoto(photo);
    setPhotoId(id)
  }

  return (
    <div ref={ref} className="grid"
      {...props}>
      <div className="grid__content">
        {galleryContentArray.map((item) => (
          <img
            className={`grid__content--item ${item.id > 2 ? 'margin' : ''}`}
            src={item.cropped}
            alt=""
            id={item.id}
            key={item.id}
            onClick={() => displayModal(item.id)}
          />
        ))}
      </div>
      {modalStatus && (
        <PhotoModal
          description={modalDescription}
          modalPhoto={modalPhoto}
          closeModal={closeModal}
        />
      )}
    </div>
  );
});

export default PhotosGrid;
