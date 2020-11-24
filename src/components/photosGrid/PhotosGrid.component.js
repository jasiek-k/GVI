import React from 'react';

import photo1 from '../../assets/images/grid1.jpg';
import photo2 from '../../assets/images/grid2.jpg';
import photo3 from '../../assets/images/grid3.jpg';
import photo4 from '../../assets/images/grid4.jpg';
import photo5 from '../../assets/images/grid5.jpg';
import photo6 from '../../assets/images/grid6.jpg';

import './PhotosGrid.styles.scss';

const firstRow = [photo1, photo2, photo3];
const secondRow = [photo4, photo5, photo6];

const PhotosGrid = ({ className }) => {
  return (
    <div className={`grid ${className}`} props>
      <div className="grid__row">
        {
          firstRow.map(item => <img className="grid__row--item" src={item} alt="" />)
        }
      </div>
      <div className="grid__row">
        {
          secondRow.map(item => <img className="grid__row--item" src={item} alt="" />)
        }
      </div>

    </div>
  )
};

export default PhotosGrid;
