import React, { useRef, useState, useCallback } from "react";
import { FormattedMessage } from "react-intl";

import ArtworksData from "../../components/common/artworksData/ArtworksData.component";
import Button from "../../components/common/button/Button.component";
import GenerativeLogo from "../../components/common/generativeLogo/GenerativeLogo.component";
import GenerativeSectionText from "../../components/common/generativeSectionText/GenerativeSectionText.component";
import SectionHeader from "../../components/common/sectionHeader/SectionHeader.component";
import { BREAKPOINTS } from "../../config";

import "./GenerativeSection.styles.scss";

const logoConfig = {
  mobile: 285,
  tablet: 223,
  desktop: 366,
};

const TRANSITION_TIMEOUT = 500;

const GenerativeSection = React.forwardRef(
  ({ getLogo, data: { roadsData, artwork } }, ref) => {
    const logoRef = useRef(null);
    const [isDisabled, setDisabled] = useState(false);

    const handleAnimation = useCallback(async () => {
      if (logoRef.current) {
        logoRef.current.classList.add("hidden");
        setDisabled(true);
        if (window.innerWidth < BREAKPOINTS.mobile)
          logoRef.current.scrollIntoView({ behavior: "smooth" });
        await new Promise((resolve) => setTimeout(resolve, TRANSITION_TIMEOUT));
        logoRef.current.classList.remove("hidden");
        setDisabled(false);
      }
    }, []);

    const handleScroll = useCallback(() => {
      if (logoRef.current)
        logoRef.current.scrollIntoView({ behavior: "smooth" });
    }, []);

    const handleLogo = useCallback(async () => {
      await new Promise((res) => res(handleScroll()));
      await new Promise((res) => res(handleAnimation()));
      await new Promise((res) => res(getLogo()));
    }, [getLogo, handleAnimation, handleScroll]);

    return (
      <div ref={ref} className="generative-section">
        <SectionHeader
          captionId="navbar:generativity"
          color="black"
          variant="fromLeft"
        />
        <div className="generative-section__container">
          <div ref={logoRef} className="generative-section__container__box">
            <div className="generative-section__container__box--logo">
              <GenerativeLogo
                isScaling={true}
                roadsData={roadsData}
                config={logoConfig}
                reverseColors={true}
              />
            </div>
            <ArtworksData artwork={artwork} />
            <div className="generative-section__container__box--divider" />
            <span className="generative-section__container__box--caption">
              <FormattedMessage id="generative:algorithmCaption" />
            </span>
          </div>
          <div className="generative-section__container__content">
            <GenerativeSectionText />
            <Button
              onClick={handleLogo}
              disabled={isDisabled}
              reverseColors
              title="generative:generateLogo"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default GenerativeSection;
