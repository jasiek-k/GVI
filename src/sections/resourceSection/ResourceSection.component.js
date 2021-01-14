import React, { memo } from "react";

import Button from "../../components/common/button/Button.component";
import { resourceContent } from "../../data/data";
import MediaBar from "./components/mediaBar/MediaBar.component";

import "./ResourceSection.styles.scss";

const ResourceSection = React.forwardRef((props, ref) => (
  <div ref={ref} className="resource-section">
    <MediaBar />
    <div className="resource-section__buttons">
      {resourceContent.map((item, index) => (
        <a
          href={item.redirect}
          className="resource-section__buttons--item"
          key={index}
          rel="noreferrer"
          target="_blank"
        >
          <Button type={item.type} title={item.title} />
        </a>
      ))}
    </div>
  </div>
));

export default memo(ResourceSection);
