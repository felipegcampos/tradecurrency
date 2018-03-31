import React from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from 'containers/CurrencyInput';
import CurrencyOutput from 'containers/CurrencyOutput';
import TradeButton from 'containers/TradeButton';
import { colors, fonts } from 'styles/theme';

const styles = {
  subTitle: {
    margin: '0 0 7px 0',
    paddingLeft: 10,
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.normal,
  },
  currency: {
    height: 40,
    lineHeight: '40px',
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.thick,
    textTransform: 'uppercase',
    borderWidth: 1,
    borderColor: colors.grey.light,
    borderStyle: 'solid',
    padding: '0 20px',
    marginBottom: 20,
  },
};

export const TradePanel = ({ source, target }) => (
  <div>
    <h2 style={styles.subTitle}>Trade</h2>
    <div style={styles.currency}>{source}</div>
    <CurrencyInput
      placeholder="Enter your amount"
    />
    <h2 style={styles.subTitle}>For</h2>
    <div style={styles.currency}>{target}</div>
    <CurrencyOutput
      placeholder="Display Quote"
    />
    <TradeButton />
  </div>
);

TradePanel.propTypes = {
  source: PropTypes.string,
  target: PropTypes.string,
};

TradePanel.defaultProps = {
  source: 'usd',
  target: 'btc',
};

export default TradePanel;
