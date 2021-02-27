import React from "react";
import { FormattedMessage } from "react-intl";

import "./Button.styles.scss";


const Button = ({ className, title, onClick, ...props }) => (
  <button
    className={`common-button ${className || ""}`}
    onClick={onClick}
    {...props}
  >
    <FormattedMessage id={title} />   
  </button>
);

export default Button;
