import React from 'react';
import PropTypes from 'prop-types';
import { currencyToString } from 'helpers/currency';
import { fonts } from 'styles/theme';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  currency: {
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.thick,
    textTransform: 'uppercase',
  },
  amount: {
    fontSize: fonts.size.xs,
    flexGrow: 1,
    marginLeft: 20,
  },
};

const CurrencyBalance = ({ currency, amount }) => (
  <div style={styles.root}>
    <div style={styles.currency}>{currency}</div>
    <div style={styles.amount}>{currencyToString(currency, amount)}</div>
  </div>
);

CurrencyBalance.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CurrencyBalance;
