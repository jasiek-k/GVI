import React from "react";

import { CloseIcon, ArrowRight } from "../../../../assets/Icons";

import "./PhotoModal.styles.scss";

const PhotoModal = ({
  currentPhoto,
  switchPhoto,
  modalPhotos,
  toggleModal,
}) => {
  if (!currentPhoto && !typeof currentPhoto === "number") return null;

  const { photo, description } = modalPhotos[currentPhoto];

  return (
    <div className="modal-container">
      <button className="close-button" onClick={() => toggleModal(null)}>
        <CloseIcon />
      </button>
      <div className="modal-content">
        <button
          className="modal-content__arrow-left"
          onClick={() => switchPhoto(currentPhoto - 1)}
        >
          <ArrowRight />
        </button>
        <button
          className="modal-content__arrow-right"
          onClick={() => switchPhoto(currentPhoto + 1)}
        >
          <ArrowRight />
        </button>

        <img className="modal-photo" src={photo} alt="modal photography" />
        {description && (
          <span className="modal-description">{description}</span>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
