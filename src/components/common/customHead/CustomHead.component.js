import React from 'react';
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

const CustomHead = () => {
  const { formatMessage } = useIntl();

  return (
    <Helmet>
        <title>
          {`${formatMessage({ id: "head:title" })}`}
        </title>
      </Helmet>
  )
}

export default CustomHead;
