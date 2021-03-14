import React from "react";

import PhotosGrid from "../../components/common/photosGrid/PhotosGrid.component";

const PhotoSection = React.forwardRef((_props, ref) => (
  <div ref={ref}>
    <PhotosGrid />
  </div>
));

export default PhotoSection;
