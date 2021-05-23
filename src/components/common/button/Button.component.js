import React from "react";
import { FormattedMessage } from "react-intl";

import "./Button.styles.scss";

const Button = ({ className, title, onClick, reverseColors, ...props }) => (
  <button
    type="button"
    className={`common-button ${reverseColors ? "reversed" : "basic"} ${
      className || ""
    }`}
    onClick={onClick}
    {...props}
  >
    <FormattedMessage id={title} />
  </button>
);

export default Button;
