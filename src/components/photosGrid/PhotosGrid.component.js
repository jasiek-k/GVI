import React, { useState, useCallback } from "react";

import PhotoModal from "../photoModal/PhotoModal.component";

import photo1 from "../../assets/images/grid1.jpg";
import photo2 from "../../assets/images/grid2.jpg";
import photo3 from "../../assets/images/grid3.jpg";
import photo4 from "../../assets/images/grid4.jpg";
import photo5 from "../../assets/images/grid5.jpg";
import photo6 from "../../assets/images/grid6.jpg";

import "./PhotosGrid.styles.scss";

const firstRow = [
  { id: 0, photo: photo1, description: "" },
  { id: 1, photo: photo2, description: "2" },
  { id: 2, photo: photo3, description: "3" },
];
const secondRow = [
  { id: 3, photo: photo4, description: "4" },
  { id: 4, photo: photo5, description: "5" },
  { id: 5, photo: photo6, description: "6" },
];

const PhotosGrid = ({ className, ...props }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalDescription, setDescription] = useState("");
  const [modalPhoto, setPhoto] = useState(null);

  const displayModal = useCallback((photoId) => {
    let photosArray = [...firstRow];
    console.log(photoId);
    if (photoId > 2) photosArray = [...secondRow];

    const [photo] = photosArray.filter((item) => item.id === photoId);
    console.log(photo);
    setDescription(photo.description);
    setPhoto(photo.photo);
    setModalStatus(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalStatus(false);
    setDescription("");
    setPhoto(null);
  }, []);

  return (
    <div className={`grid ${className}`} {...props}>
      <div className="grid__row">
        {firstRow.map((item) => (
          <img
            className="grid__row--item"
            src={item.photo}
            alt=""
            key={item.id}
            onClick={() => displayModal(item.id)}
          />
        ))}
      </div>
      <div className="grid__row">
        {secondRow.map((item) => (
          <img
            className="grid__row--item"
            src={item.photo}
            alt=""
            key={item.id}
            onClick={() => displayModal(item.id)}
          />
        ))}
      </div>
      {modalStatus ? (
        <PhotoModal
          description={modalDescription}
          modalPhoto={modalPhoto}
          closeModal={closeModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PhotosGrid;
