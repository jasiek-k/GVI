import React, { useCallback, memo } from "react";
import { FormattedMessage } from 'react-intl';

import { AVAILABLE_LANGS } from "../../../../config";

import './Nav.styles.scss';

const Nav = ({ setLangCallback, currentLang, refs }) => {
  const navbarContent = [
    { caption: "navbar:about", ref: refs[0] },
    { caption: "navbar:generativity", ref: refs[1] },
    { caption: "navbar:photos", ref: refs[2] },
    { caption: "navbar:resources", ref: refs[3] },
  ]

  const handleScroll = useCallback((ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  console.log(currentLang);

  return (
    <div className="navbar">
      <div className="navbar__scroll">
      {
        navbarContent.map((item, index) => (
          <button className="navbar__scroll-item" key={index} onClick={() => handleScroll(item.ref)}>
            <FormattedMessage id={item.caption} />
          </button>
        ))
      }
      </div>
      <div className="navbar__lang">
      {Object.keys(AVAILABLE_LANGS).map((item, index) => {
      return (
        <button className={`navbar__lang-item ${item.toLowerCase() === currentLang && 'current'}`} onClick={() => setLangCallback(item)} key={index}>
          {item}
        </button>
      )})}
      </div>
    </div>
  );
};

export default memo(Nav);
