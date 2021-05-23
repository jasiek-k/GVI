import React, { useState, useCallback, useMemo, useRef } from "react";
import { FormattedMessage } from "react-intl";

import Button from "../../components/common/button/Button.component";
import Text from "../../components/common/text/Text.component";
import Table from "../../components/common/table/Table.component";

import "./InformationSection.styles.scss";

const InformationSection = React.forwardRef((props, ref) => {
  const [readMore, setReadMore] = useState(false);
  const textRef = useRef(null);

  const toggleParagraph = useCallback(() => {
    setReadMore((is) => {
      if (is && textRef.current) textRef.current.scrollIntoView();
      return !is;
    });
  }, []);

  const paragraphText = useMemo(
    () => (
      <>
        <Text className="text-paragraph" variant="intro">
          <FormattedMessage id="informative:intro" />
        </Text>
        <Text className="text-paragraph">
          <FormattedMessage className="" id="informative:zeroParagraph" />
        </Text>
        <Text className="text-paragraph">
          <FormattedMessage id="informative:firstParagraph" />
        </Text>
        {readMore && (
          <>
            <Text className="text-paragraph">
              <FormattedMessage id="informative:secondParagraph" />
            </Text>
            <Text className="text-paragraph">
              <FormattedMessage id="informative:thirdParagraph" />
            </Text>
            <Text className="text-paragraph">
              <FormattedMessage id="informative:fourthParagraph" />
            </Text>
          </>
        )}
      </>
    ),
    [readMore]
  );

  return (
    <div ref={ref} className="information-section">
      <div className="information-section__header">
        <span className="information-section__header--caption">
          <FormattedMessage id="navbar:about" />
        </span>
      </div>
      <div className="information-section__wrapper">
        <div className="information-section__columns">
          <div ref={textRef} className="information-section__columns--item">
            {paragraphText}
            <div className="button-wrapper">
              <Button
                type="common"
                onClick={toggleParagraph}
                title={
                  readMore ? "informative:readLess" : "informative:readMore"
                }
              />
            </div>
          </div>
          <div className="information-section__columns--item">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
});

export default InformationSection;
