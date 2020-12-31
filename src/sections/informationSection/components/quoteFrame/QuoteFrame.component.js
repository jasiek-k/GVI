import React from "react";
import { FormattedMessage } from 'react-intl';

import photo from "../../../../assets/images/grid6.jpg";
import Text from '../../../../components/common/text/Text.component';

import './QuoteFrame.styles.scss';

const QuoteFrame = () => {
  return (
    <div className="quote-frame">
      <img className="quote-frame__photo" src={photo} alt="" />
      <div className="quote-frame__text">
        <Text className="quote-frame__text-span">
          <FormattedMessage id="informative:quoteFrame" />
        </Text>
      </div>
    </div>
  );
};

export default QuoteFrame;
