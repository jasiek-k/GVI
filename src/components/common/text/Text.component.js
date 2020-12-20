import React from "react";
import "./Text.styles.scss";

const Text = ({ children, className, ...props }) => {
  return (
    <p className={`common-text ${className}`} {...props}>
      {children}
    </p>
  );
};

export default Text;
