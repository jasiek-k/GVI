import React from "react";
import { FormattedMessage } from "react-intl";
import "./Footer.styles.scss";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-caption__wrapper">
      <span className="footer-caption">
        <FormattedMessage id="footer:caption" />
      </span>
    </div>
  </footer>
);

export default Footer;
