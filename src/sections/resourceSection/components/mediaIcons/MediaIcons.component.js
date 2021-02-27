import React from 'react';

import { socialMediaArray } from "../../../../data/data";

import "../mediaBar/MediaBar.styles.scss";

const MediaIcons = ({ className }) => (
  <div className={`${className}__medias`}>
    {socialMediaArray.map((item, index) => (
      <div key={index} className={`${className}__medias__icon`}>
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.icon}
        </a>
      </div>
    ))}
  </div>
);

export default MediaIcons;
