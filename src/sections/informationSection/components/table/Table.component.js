import React from "react";
import { useIntl } from "react-intl";

import { tableData } from "../../../../assets/data";

import "./Table.styles.scss";

const Table = () => {
  const { formatMessage } = useIntl();

  return (
    <table className="table">
      <tbody>
        {tableData.map((item, index) => (
          <tr className="table__row" key={index}>
            <td className="table__row-title">
              {formatMessage({ id: item.title })}
            </td>
            <td className="table__row-content">
              {formatMessage({ id: item.content })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
