import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import ResourceItem from "../../components/common/resourceItem/ResourceItem.component";
import MediaBar from "./components/mediaBar/MediaBar.component";
import { resourceContent } from "../../data/data";

import "./ResourceSection.styles.scss";

const ResourceSection = React.forwardRef((_props, ref) => (
  <div ref={ref} className="resource-section">
    <MediaBar />
    <div className="resource-section__header">
      <p className="resource-section__header--caption">
        <FormattedMessage id="navbar:resources" />
      </p>
    </div>
    <div className="resource-section__items">
      <div className="resource-section__items--wrapper">
        {resourceContent.map((item, index) => (
          <ResourceItem key={index} data={item} />
        ))}
      </div>
    </div>
  </div>
));

export default memo(ResourceSection);
