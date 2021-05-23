import React, { memo } from "react";
import { FormattedMessage } from "react-intl";

import { tableData } from "../../../data/data";

import "./Table.styles.scss";

const Table = () => (
  <table className="table">
    <tbody>
      {tableData.map((item, index) => (
        <tr className="table__row" key={index}>
          <td className="table__row-title">
            <FormattedMessage id={item.title} />
          </td>
          <td className="table__row-content">
            <FormattedMessage id={item.content} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default memo(Table);
