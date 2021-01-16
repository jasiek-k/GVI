import React from "react";
import PhotosGrid from "./components/photosGrid/PhotosGrid.component";

const PhotoSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <PhotosGrid />
    </div>
  );
});

export default PhotoSection;
