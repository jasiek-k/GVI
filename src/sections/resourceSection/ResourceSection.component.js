import React, { memo } from "react";

import MediaBar from "../../components/common/mediaBar/MediaBar.component";
import ResourceItem from "../../components/common/resourceItem/ResourceItem.component";
import SectionHeader from "../../components/common/sectionHeader/SectionHeader.component";
import { resourceContent } from "../../data/data";

import "./ResourceSection.styles.scss";

const ResourceSection = React.forwardRef((_props, ref) => (
  <div ref={ref} className="resource-section">
    <MediaBar />
    <SectionHeader
      captionId="navbar:resources"
      color="white"
      variant="fromLeft"
      className="resource-divider"
    />
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
