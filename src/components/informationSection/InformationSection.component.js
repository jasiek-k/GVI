import React from "react";
import { FormattedMessage } from "react-intl";
import Text from "../common/text/Text.component";
import "./InformationSection.styles.scss";

const InformationSection = () => {
  return (
    <div className="information-section">
      <div className="information-section__text">
        <Text className="text-paragraph">
          <FormattedMessage id="informative:firstParagraph" />
        </Text>
        <Text className="text-paragraph">
          <FormattedMessage id="informative:secondParagraph" />
        </Text>
        <Text className="text-paragraph">
          <FormattedMessage id="informative:thirdParagraph" />
        </Text>
        <Text className="text-paragraph">
          <FormattedMessage id="informative:fourthParagraph" />
        </Text>
      </div>
    </div>
  );
};

export default InformationSection;
