import React from "react";
import { FormattedMessage } from "react-intl";
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../assets/Icons";

import "./MediaBar.styles.scss";

const MediaBar = ({ className }) => {
  return (
    <div className={`mediaBar ${className}`}>
      <div className="mediaBar__content">
        <span>
          <FormattedMessage id="mediaBar:caption" />
        </span>
        <div className="mediaBar__medias">
          <div className="mediaBar__icon">
            <FacebookIcon />
          </div>
          <div className="mediaBar__icon">
            <YoutubeIcon />
          </div>
          <div className="mediaBar__icon">
            <TwitterIcon />
          </div>
          <div className="mediaBar__icon">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBar;
