import React, { useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

import GenerativeLogo from "../../components/common/generativeLogo/GenerativeLogo.component";
import Text from '../../components/common/text/Text.component';
import Button from '../../components/common/button/Button.component';
import ArtworksData from "../../components/common/artworksData/ArtworksData.component";
import { BREAKPOINTS } from '../../config';

import "./GenerativeSection.styles.scss";

const logoConfig = {
  mobile: 285,
  tablet: 223,
  desktop: 366
}

const GenerativeSection = React.forwardRef(({ getLogo, data: { roadsData, artwork } }, ref) => {
  const logoRef = useRef(null);
  const [isDisabled, setDisabled] = useState(false);

  const handleAnimation = async () => {
    if (logoRef.current) {
      logoRef.current.classList.add('hidden')
      setDisabled(true)
      if (window.innerWidth < BREAKPOINTS.mobile) logoRef.current.scrollIntoView({ behavior: "smooth" });
      await new Promise(resolve => setTimeout(resolve, 500))
      logoRef.current.classList.remove('hidden')
      setDisabled(false)
    }
  }

  const handleScroll = () => {
    if (logoRef.current) logoRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const handleLogo = async () => {
    await new Promise(res => res(handleScroll()))
    await new Promise(res => res(handleAnimation()))
    await new Promise(res => res(getLogo()));
  }

  return (
    <div ref={ref} className="generative-section">
      <div className="generative-section__header">
        <p className="generative-section__header--caption">
          <FormattedMessage id="navbar:generativity" />
        </p>
      </div>
      <div className="generative-section__container" >
        <div ref={logoRef} className="generative-section__container__box" >
          <div className="generative-section__container__box--logo" >
            <GenerativeLogo roadsData={roadsData} config={logoConfig} reverseColors={true} />
          </div>
          <ArtworksData artwork={artwork} />
          <div className="generative-section__container__box--divider"></div>
          <span className="generative-section__container__box--caption">
            <FormattedMessage id="generative:algorithmCaption" />
          </span>
        </div>
        <div className="generative-section__container__content" >
          <div className="generative-section__container__content--text" >
            <Text className="generative-section__container__content--text--intro" variant="intro">
              <FormattedMessage id="generative:introText" />
            </Text>
            <Text className="generative-section__container__content--text--quote">
              <FormattedMessage id="generative:quote" />
            </Text>
            <Text className="generative-section__container__content--text--paragraph">
              <FormattedMessage id="generative:text" />
            </Text>
          </div>
          <Button onClick={handleLogo} disabled={isDisabled} reverseColors title="generative:generateLogo" />
        </div>
      </div>
    </div>
  );
});

export default GenerativeSection;
