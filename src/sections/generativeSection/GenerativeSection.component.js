import React from "react";

import GenerativeLogo from "../../components/generativeLogo/GenerativeLogo.component";

import "./GenerativeSection.styles.scss";

const GenerativeSection = React.forwardRef(({ roadsData }, ref) => {
  return (
    <div ref={ref} className="generative-section">
      <div className="generative-section__container">
        <div className="generative-section__container--header">
          <div className="generative-section__container--header-wrapper">
            <div className="generative-logo">
              <GenerativeLogo roadsData={roadsData} reverseColors={true} />
            </div>
            <h1 className="section-title">
              ATLAS NOWOCZESNOŚCI A&nbsp;GENERATYWNOŚĆ
            </h1>
          </div>
        </div>
        <div className="generative-section__container--content"></div>
      </div>
    </div>
  );
});

export default GenerativeSection;
