import React from "react";
import { FormattedMessage } from "react-intl";

import GenerativeLogo from "../../components/generativeLogo/GenerativeLogo.component";

import "./GenerativeSection.styles.scss";

const GenerativeSection = React.forwardRef(({ roadsData }, ref) => {
  return (
    <div ref={ref} className="generative-section">
      <div className="generative-section__header">
        <p className="generative-section__header--caption">
          <FormattedMessage id="navbar:generativity" />
        </p>
      </div>
      <div className="generative-section__container">
        <div className="generative-section__container--header">
          <GenerativeLogo roadsData={roadsData} reverseColors={false} />
        </div>
        <div className="generative-section__container--content"></div>
      </div>
    </div>
  );
});

export default GenerativeSection;
