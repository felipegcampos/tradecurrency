import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/keys';
import { fonts } from 'styles/theme';
import CurrencyBalance from './CurrencyBalance';

const styles = {
  root: {
    marginBottom: 20,
  },
  title: {
    margin: '0 0 15px 0',
    paddingLeft: 10,
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.normal,
  },
  balancePanel: {
    padding: '0 20px',
  },
};

const AccountBalance = ({ balance }) => (
  <div style={styles.root}>
    <h1 style={styles.title}>Account Balance</h1>
    <div style={styles.balancePanel}>
      {keys(balance).map(currency => (
        <CurrencyBalance
          key={currency}
          currency={currency}
          amount={balance[currency]}
        />
      ))}
    </div>
  </div>
);

AccountBalance.propTypes = {
  balance: PropTypes.object.isRequired,
};

export default AccountBalance;
