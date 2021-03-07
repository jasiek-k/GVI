import React from 'react';

import { socialMediaArray } from "../../../data/data";

import "./MediaIcons.styles.scss";

const MediaIcons = ({ className = '' }) => (
  <div className={`${className} social-media`}>
    {socialMediaArray.map((item, index) => (
      <div key={index} className={`${className} social-media__icon`}>
        <a href={item.link} rel="noreferrer" target="_blank">
          {item.icon}
        </a>
      </div>
    ))}
  </div>
);

export default MediaIcons;
