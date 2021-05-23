import React from "react";
import { FormattedMessage } from "react-intl";

import "./ResourceItem.styles.scss";

const ResourceItem = ({ data: { photo, link, title, caption } }) => (
  <a
    href={link}
    rel="noreferrer"
    target="_blank"
    className="resource-item__link"
  >
    <div className="resource-item">
      <img src={photo} className="resource-item__photo" alt="" />
      <p className="resource-item__title">
        <FormattedMessage id={title} />
      </p>
      <div className="resource-item__divider"></div>
      <span className="resource-item__caption">
        <FormattedMessage id={caption} />
      </span>
    </div>
  </a>
);

export default ResourceItem;
