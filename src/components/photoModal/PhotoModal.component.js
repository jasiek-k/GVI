import React from 'react';

import './PhotoModal.styles.scss';

const PhotoModal = ({ description, modalPhoto, closeModal }) => {
  return (
    <div className="modal-container">
      <button onClick={closeModal}>CLOSE</button>
      <img
        src={modalPhoto}
        alt="modal photography"
      />
      <span>{description}</span>
      <div></div>
    </div>
  )
};

export default PhotoModal;
