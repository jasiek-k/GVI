import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import MediaIcons from '../mediaIcons/MediaIcons.component';

import "./MediaBar.styles.scss";

const MediaBar = React.forwardRef((_props, ref) => (
  <div ref={ref} className="media-bar">
    <div className="media-bar__content">
      <span className="media-bar__caption">
        <a href="https://msl.org.pl/" rel="noreferrer" target="_blank">
          <FormattedMessage id="mediaBar:caption" />
        </a>
      </span>
      <MediaIcons className="media-icons"/>
    </div>
  </div>
));

export default memo(MediaBar);
