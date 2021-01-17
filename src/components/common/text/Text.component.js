import React from "react";

import "./Text.styles.scss";

const Text = ({ children, className, variant, ...props }) => (
  <p
    className={`common-text 
        ${variant === "intro" ? "intro" : "paragraph"} 
        ${className}`}
    {...props}
  >
    {children}
  </p>
);

export default Text;
