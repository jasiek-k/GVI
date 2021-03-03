import React from "react";
import { FormattedMessage } from "react-intl";

import { linksArray, msUrl } from '../../data/data';

import "./Footer.styles.scss";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-caption__wrapper">
      <span className="footer-caption">
        <FormattedMessage id="footer:caption" />
      </span>
      <div className="footer-caption__wrapper__content">
        <a
          href={msUrl}
          rel="noreferrer"
          target="_blank"
          className="footer-caption__wrapper__content--item"
        >
          <FormattedMessage id="footer:museum" />
        </a>
        <div className="footer-caption__wrapper__content--right">
          {
            linksArray.map((item, index) => (
              <a
                href={item.link}
                key={index}
                rel="noreferrer"
                target="_blank"
                className="footer-caption__wrapper__content--right__item"
              >
                {item.label}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
