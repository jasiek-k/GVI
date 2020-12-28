import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import Button from "../../components/common/button/Button.component";
import Text from "../../components/common/text/Text.component";
import Table from "./components/table/Table.component";

import "./InformationSection.styles.scss";

const InformationSection = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="information-section">
      <div className="information-section__col">
        {readMore ? (
          <>
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
            <Button
              type="common"
              onClick={() => setReadMore(false)}
              title="informative:readLess"
            />
          </>
        ) : (
          <>
            <Text className="text-paragraph" variant="intro">
              <FormattedMessage id="informative:intro" />
            </Text>
            <Text className="text-paragraph">
              <FormattedMessage id="informative:firstParagraph" />
            </Text>
            <Button
              type="common"
              onClick={() => setReadMore(true)}
              title="informative:readMore"
            />
          </>
        )}
      </div>
      <div className="information-section__col">
        <Table />
      </div>
    </div>
  );
};

export default InformationSection;
