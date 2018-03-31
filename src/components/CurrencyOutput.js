import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts } from 'styles/theme';

const styles = {
  input: {
    height: 40,
    lineHeight: '40px',
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.thick,
    borderWidth: 1,
    borderColor: colors.grey.light,
    borderStyle: 'solid',
    padding: '0 20px',
    marginBottom: 20,
    width: '100%',
  },
  placeholder: {
    color: colors.grey.medium,
  },
};

const CurrencyOutput = ({ placeholder, quote }) => (
  <div style={styles.input}>
    {!quote && <span style={styles.placeholder}>{placeholder}</span>}
    {quote && quote}
  </div>
);

CurrencyOutput.propTypes = {
  placeholder: PropTypes.string,
  quote: PropTypes.number,
};

CurrencyOutput.defaultProps = {
  placeholder: '',
  quote: null,
};

export default CurrencyOutput;
