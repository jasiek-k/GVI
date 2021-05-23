import React, { useRef, useState, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";

import ArtworksData from "../../components/common/artworksData/ArtworksData.component";
import Button from "../../components/common/button/Button.component";
import GenerativeLogo from "../../components/common/generativeLogo/GenerativeLogo.component";
import Text from "../../components/common/text/Text.component";
import { BREAKPOINTS } from "../../config";

import "./GenerativeSection.styles.scss";

const logoConfig = {
  mobile: 285,
  tablet: 223,
  desktop: 366,
};

const ParagraphHeader = ({ children, className }) => (
  <Text className={!!className ? className : ""}>
    <b className="black-header">{children}</b>
  </Text>
);

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
        await new Promise((resolve) => setTimeout(resolve, 500));
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

    const sectionText = useMemo(
      () => (
        <div className="generative-section__container__content--text">
          <Text
            className="generative-section__container__content--text--intro"
            variant="intro"
          >
            <FormattedMessage id="generativeText:intro" />
          </Text>
          <h3 className="paragraph-header">
            <FormattedMessage id="generativeText:firstHeader" />
          </h3>
          <Text className="generative-section__container__content--text--paragraph">
            <FormattedMessage id="generativeText:algorithmParagraph" />
          </Text>
          <Text className="generative-section__container__content--text--paragraph paragraph-divider-s">
            <FormattedMessage id="generativeText:stepsIntro" />
            <ul className="paragraph-list">
              <li>
                <FormattedMessage id="generativeText:algorithmFirstStep" />
              </li>
              <li>
                <FormattedMessage id="generativeText:algorithmSecondStep" />
              </li>
              <li>
                <FormattedMessage id="generativeText:algorithmThirdStep" />
              </li>
            </ul>
          </Text>
          <Text className="generative-section__container__content--text--paragraph paragraph-divider-s">
            <FormattedMessage id="generativeText:roadsFeatures" />
            <ul className="paragraph-list">
              <li>
                <FormattedMessage id="generativeText:firstRoadFeature" />
              </li>
              <li>
                <FormattedMessage id="generativeText:secondRoadFeature" />
              </li>
              <li>
                <FormattedMessage id="generativeText:thirdRoadFeature" />
              </li>
            </ul>
            <FormattedMessage id="generativeText:obliqueRoadFeature" />
          </Text>
          <Text className="generative-section__container__content--text--paragraph paragraph-divider-s">
            <FormattedMessage id="generativeText:algorithmWork" />
          </Text>
          <h3 className="paragraph-header paragraph-divider-xl">
            <FormattedMessage id="generativeText:algorithmFeatures" />
          </h3>
          <div>
            <ParagraphHeader>
              <FormattedMessage id="generativeText:firstFeatureHeader" />
            </ParagraphHeader>
            <Text className="generative-section__container__content--text--paragraph">
              <FormattedMessage id="generativeText:firstFeatureText1" />
            </Text>
            <Text className="generative-section__container__content--text--quote paragraph-divider-s">
              <i>
                <FormattedMessage id="generativeText:firstFeatureQuote" />
              </i>
            </Text>
            <Text className="generative-section__container__content--text--paragraph paragraph-divider-s">
              <FormattedMessage id="generativeText:firstFeatureText2" />
            </Text>
          </div>
          <div className="paragraph-divider">
            <ParagraphHeader>
              <FormattedMessage id="generativeText:secondFeatureHeader" />
            </ParagraphHeader>
            <Text className="generative-section__container__content--text--paragraph">
              <FormattedMessage id="generativeText:secondFeatureText" />
            </Text>
          </div>
          <div className="paragraph-divider">
            <ParagraphHeader className="parapgraph-divider">
              <FormattedMessage id="generativeText:thirdFeatureHeader" />
            </ParagraphHeader>
            <Text className="generative-section__container__content--text--paragraph">
              <FormattedMessage id="generativeText:thirdFeatureText" />
            </Text>
          </div>
        </div>
      ),
      []
    );

    return (
      <div ref={ref} className="generative-section">
        <div className="generative-section__header">
          <p className="generative-section__header--caption">
            <FormattedMessage id="navbar:generativity" />
          </p>
        </div>
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
            {sectionText}
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
