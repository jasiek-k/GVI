import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import Text from "../text/Text.component";

const ParagraphHeader = ({ children, className }) => (
  <Text className={!!className ? className : ""}>
    <b className="black-header">{children}</b>
  </Text>
);

const GenerativeSectionText = () => (
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
    <div className="paragraph-divider-s">
      <Text className="generative-section__container__content--text--paragraph">
        <FormattedMessage id="generativeText:stepsIntro" />
      </Text>
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
    </div>
    <div className="paragraph-divider-s">
      <Text className="generative-section__container__content--text--paragraph">
        <FormattedMessage id="generativeText:roadsFeatures" />
      </Text>
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
      <Text className="generative-section__container__content--text--paragraph">
        <FormattedMessage id="generativeText:obliqueRoadFeature" />
      </Text>
    </div>
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
        <FormattedMessage id="generativeText:firstFeatureQuote" />
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
);

export default memo(GenerativeSectionText);
