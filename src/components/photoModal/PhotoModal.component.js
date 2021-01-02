import React from "react";

import { CloseIcon } from "../../assets/Icons";

import "./PhotoModal.styles.scss";

const PhotoModal = ({ currentPhoto, switchPhoto, modalPhotos, closeModal }) => {
  if (!currentPhoto && !typeof currentPhoto === "number") return null;

  const { photo, description } = modalPhotos[currentPhoto]

  return (
    <div className="modal-container">
      <button className="close-button" onClick={closeModal}>
        <CloseIcon />
      </button>
      <div className="modal-content">
        <button onClick={() => switchPhoto(currentPhoto - 1)}>left</button>
        <button onClick={() => switchPhoto(currentPhoto + 1)}>right</button>

        <img className="modal-photo" src={photo} alt="modal photography" />
        {description && (
          <span className="modal-description">{description}</span>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
