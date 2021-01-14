import React, { useCallback, useState, memo } from "react";
import { FormattedMessage } from "react-intl";

import { AVAILABLE_LANGS } from "../../../../config";

import "./Nav.styles.scss";

const Nav = ({ setLangCallback, currentLang, refs }) => {
  const [menuState, setMenuState] = useState(false);

  const navbarContent = [
    { caption: "navbar:about", ref: refs[0] },
    { caption: "navbar:generativity", ref: refs[1] },
    { caption: "navbar:photos", ref: refs[2] },
    { caption: "navbar:resources", ref: refs[3] },
  ];

  const handleScroll = useCallback(
    (ref) => {
      setMenuState(!menuState);
      ref.current.scrollIntoView({ behavior: "smooth" });
    },
    [menuState]
  );

  return (
    <>
      <button
        className="toggle-button"
        onClick={() => setMenuState(!menuState)}
      >
        {menuState ? "CLOSE" : "OPEN"}
      </button>

      <div className={`navbar ${menuState ? "visible" : undefined}`}>
        <div className={menuState ? "navbar__wrapper" : undefined}>
          <div className="navbar__scroll">
            {navbarContent.map((item, index) => (
              <button
                className="navbar__scroll-item"
                key={index}
                onClick={() => handleScroll(item.ref)}
              >
                <FormattedMessage id={item.caption} />
              </button>
            ))}
          </div>
          <div className="navbar__lang">
            {Object.keys(AVAILABLE_LANGS).map((item, index) => {
              return (
                <button
                  className={`navbar__lang-item ${
                    item.toLowerCase() === currentLang ? "current" : undefined
                  }`}
                  onClick={() => setLangCallback(item)}
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Nav);
