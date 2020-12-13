import React from 'react';
import { FormattedMessage } from 'react-intl';

import './MediaBar.styles.scss';

const MediaBar = ({ className }) => {
  return (
    <div className={`mediaBar ${className}`}>
      <div className="mediaBar__content">
        <span><FormattedMessage id="hello" /></span>
      </div>
    </div >
  )
};

export default MediaBar;
