import React from 'react';
import './MediaBar.styles.scss';

const MediaBar = ({ className }) => {
  return (
    <div className={`mediaBar ${className}`}>
      <div className="mediaBar__content">
        <span>Odwiedź stronę ms</span>
      </div>
    </div >
  )
};

export default MediaBar;
