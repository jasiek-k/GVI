import React from "react";
import clsx from "clsx";

import "./Text.styles.scss";

const Text = ({ children, className, variant, ...props }) => (
  <p
    className={clsx(
      "common-text",
      { intro: variant === "intro" },
      { paragraph: variant === "paragraph" },
      { quote: variant === "quote" },
      className
    )}
    {...props}
  >
    {children}
  </p>
);

export default Text;
