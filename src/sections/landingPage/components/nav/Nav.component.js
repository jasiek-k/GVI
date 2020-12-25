import React from "react";

import { AVAILABLE_LANGS } from "../../../../config";

const Nav = ({ setLangCallback }) => {
  return (
    <div>
      {Object.keys(AVAILABLE_LANGS).map((item, index) => (
        <button onClick={() => setLangCallback(item)} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Nav;
