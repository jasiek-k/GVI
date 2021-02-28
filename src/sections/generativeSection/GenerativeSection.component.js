import React from "react";
import { FormattedMessage } from "react-intl";

import GenerativeLogo from "../../components/generativeLogo/GenerativeLogo.component";
import Text from '../../components/common/text/Text.component';
import Button from '../../components/common/button/Button.component';

import "./GenerativeSection.styles.scss";
import ArtworksData from "../../components/common/artworksData/ArtworksData.component";

// TO DO: tablet size
const logoConfig = {
    mobile: 285,
    tablet: 366,
    desktop: 366 
  }

const GenerativeSection = React.forwardRef(({ getLogo, data: { roadsData, artwork } }, ref) => {
    console.log(artwork)
    
    return ( 
    <div ref={ref} className="generative-section">
        <div className = "generative-section__header">
        <p className = "generative-section__header--caption">
        <FormattedMessage id="navbar:generativity" />
        </p> </div> <div className = "generative-section__container" >
        <div className = "generative-section__container__box" >
          <div className = "generative-section__container__box--logo" >
              <GenerativeLogo roadsData={roadsData} config={logoConfig} reverseColors={true}/> 
          </div> 
          <ArtworksData artwork={artwork} />
          <div className="generative-section__container__box--divider"></div>
          <span className="generative-section__container__box--caption">
              <FormattedMessage id="generative:algorithmCaption" />
          </span>
        </div>
        <div className = "generative-section__container__content" >
          <Text className = "generative-section__container__content--intro" variant="intro">
              <FormattedMessage id="generative:introText" />
          </Text>
          <Text className = "generative-section__container__content--quote">
              <FormattedMessage id="generative:quote" />
          </Text> 
          <Text className = "generative-section__container__content--text">
              <FormattedMessage id="generative:text" />
          </Text>
          <Button onClick={getLogo} reverseColors title="generative:generateLogo" />
          </div>
        </div>
      </div>
    );
});

export default GenerativeSection;
