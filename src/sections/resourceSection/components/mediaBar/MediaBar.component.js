import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import { socialMediaArray } from "../../../../data/data";

import "./MediaBar.styles.scss";

const MediaBar = React.forwardRef((props, ref) => (
  <div ref={ref} className="mediaBar">
    <div className="mediaBar__content">
      <span className="mediaBar__caption">
        <a href="https://msl.org.pl/" rel="noreferrer" target="_blank">
          <FormattedMessage id="mediaBar:caption" />
        </a>
      </span>
      <div className="mediaBar__medias">
        {socialMediaArray.map((item, index) => (
          <div key={index} className="mediaBar__icon">
            <a href={item.link} rel="noreferrer" target="_blank">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
));

export default memo(MediaBar);