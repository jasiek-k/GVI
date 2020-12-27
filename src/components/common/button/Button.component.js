import React from "react";
import { FormattedMessage } from "react-intl";

import { ArrowIcon } from "../../../assets/Icons";

import "./Button.styles.scss";

const Button = ({ type, className, title }) => (
  <button className={`common-button ${className || ""}`}>
    <table className={`button-content ${type}`}>
      <tbody>
        <tr className="button-row">
          <td className="button__caption">
            <FormattedMessage id={title} />
          </td>
          <td className="button__icon">
            <div className={`button__icon-wrapper ${type || ""}`}>
              <ArrowIcon />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </button>
);

export default Button;
