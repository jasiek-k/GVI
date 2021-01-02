import React, { memo } from "react";

import Button from "../../components/common/button/Button.component";
import { resourceContent } from "../../data/data";
import MediaBar from "./components/mediaBar/MediaBar.component";

import "./ResourceSection.styles.scss";

// TO DO buttons heights 
const ResourceSection = React.forwardRef((props, ref) => (
  <div ref={ref} className="resource-section">
    <MediaBar />
    <div className="resource-section__buttons">
      {resourceContent.map((item, index) => (
        <a href={item.redirect} key={index} rel="noreferrer" target="_blank">
          <Button
            type={item.type}
            title={item.title}
            className="resource-section__button"
          />
        </a>
      ))}
    </div>
  </div>
));

export default memo(ResourceSection);
