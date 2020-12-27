import React from "react";

import Button from "../../components/common/button/Button.component";
import { resourceContent } from "../../data/data";

import "./ResourceSection.styles.scss";

const ResourceSection = () => {
  return (
    <div className="resource-section">
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
  );
};

export default ResourceSection;
