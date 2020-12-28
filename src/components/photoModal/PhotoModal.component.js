import React from "react";

import { CloseIcon } from "../../assets/Icons";

import "./PhotoModal.styles.scss";

const PhotoModal = ({ description, modalPhoto, closeModal }) => {
  return (
    <div className="modal-container">
      <button className="close-button" onClick={closeModal}>
        <CloseIcon />
      </button>
      <div className="modal-content">
        <img className="modal-photo" src={modalPhoto} alt="modal photography" />
        {description && (
          <span className="modal-description">{description}</span>
        )}
      </div>
    </div>
  );
};

export default PhotoModal;
