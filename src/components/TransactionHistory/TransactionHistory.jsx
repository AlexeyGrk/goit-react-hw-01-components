import React from "react";
import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableTh,
  TableTr,
  TableBody,
  TableTd,
} from "./TransactionHistory.styles";

const TransactionHistory = (props) => {
  const { history } = props;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableTr>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </TableTr>
        </TableHead>
        {history.map(({ id, amount, currency, type }) => (
          <TableBody key={id}>
            <TableTr>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableTr>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TransactionHistory;
