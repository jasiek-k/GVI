import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { handleMaterialTranslation } from "../../../services/helpers";

import "./ArtworksData.styles.scss";

const ArtworksData = ({ artwork }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="artwork-data__container">
      {Object.keys(artwork).map((item, index) => {
        let text = "";

        if (item === "materials")
          text = handleMaterialTranslation(artwork[item]);
        else if (item === "size") text = `${artwork[item].join(" x ")} cm`;
        else if (item === "phrase")
          text = formatMessage({ id: `modernity:${artwork[item]}` });
        else text = artwork[item];

        return (
          <div className="artwork-data__container--item" key={index}>
            <p className="artwork-data__container--item__title">
              <FormattedMessage id={`artwork:${item}`} />
            </p>
            <p className="artwork-data__container--item__text">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArtworksData;
