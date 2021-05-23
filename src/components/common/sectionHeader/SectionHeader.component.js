import React from "react";
import { FormattedMessage } from "react-intl";
import clsx from "clsx";

import "./SectionHeader.styles.scss";

const SectionHeader = ({
  variant = "fromLeft",
  color = "white",
  captionId,
  className,
}) => (
  <div
    className={clsx(
      className,
      "section__header--wrapper",
      variant === "fromLeft" ? "left-variant" : "right-variant"
    )}
  >
    <div
      className={clsx(
        "section__header",
        variant === "fromLeft" ? "right-align" : "left-align",
        color === "white" ? "bg-white" : "bg-black"
      )}
    >
      <span className="section__header--caption">
        <FormattedMessage id={captionId} />
      </span>
    </div>
  </div>
);

export default SectionHeader;
