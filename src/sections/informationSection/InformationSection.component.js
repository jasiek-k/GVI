import React from "react";
import { FormattedMessage } from "react-intl";
import Text from "../../components/common/text/Text.component";
import Table from "./components/table/Table.component";
import "./InformationSection.styles.scss";

const InformationSection = () => {
  return (
    <div className="information-section">
      <div className="information-section__col">
        <Text className="text-paragraph" variant="intro">
          <FormattedMessage id="informative:intro" />
        </Text>
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
      <div className="information-section__col">
        <Table />
      </div>
    </div>
  );
};

export default InformationSection;
