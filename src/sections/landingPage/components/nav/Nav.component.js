import React, { useCallback, useState, memo } from "react";
import { FormattedMessage } from "react-intl";

import { AVAILABLE_LANGS, MENU_TOGGLE_TIMEOUT } from "../../../../config";
import { CloseIcon, HamburgerIcon } from "../../../../assets/Icons";

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
      let timeOut = window.innerWidth < 1024 ? MENU_TOGGLE_TIMEOUT : 0;

      setMenuState(!menuState);
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, timeOut);
    },
    [menuState]
  );

    const LangButton = ({ item, index }) => (
      <>
                  <button
                    className={`navbar__lang--item ${
                      item.toLowerCase() === currentLang ? "current" : ""
                    }`}
                    onClick={() => setLangCallback(item)}
                  >
                    {item}
                  </button>
                  {index === 0 && (
                    <span className="navbar__lang--item--divider">/</span>
                  )}
                </>
    )

  return (
    <>
      <button
        className={`toggle-button ${menuState ? "dropped" : ""}`}
        onClick={() => setMenuState(!menuState)}
      >
        {menuState ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      <div className={`navbar ${menuState ? "visible" : ""}`}>
        <div className={menuState ? "navbar__wrapper" : undefined}>
          <div className="navbar__scroll">
            {navbarContent.map((item, index) => (
              <button
                className="navbar__scroll--item"
                key={index}
                onClick={() => handleScroll(item.ref)}
              >
                <FormattedMessage id={item.caption} />
              </button>
            ))}
          </div>
          <div className="navbar__lang">
            {Object.keys(AVAILABLE_LANGS).map((item, index) => {
              return <LangButton key={index} index={index} item={item}/>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Nav);
