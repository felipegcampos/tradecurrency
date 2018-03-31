import React from 'react';
import PropTypes from 'prop-types';
import { colors, fonts } from 'styles/theme';

const styles = {
  input: hasError => ({
    height: 40,
    fontSize: fonts.size.xs,
    fontWeight: fonts.weight.thick,
    borderWidth: 1,
    borderColor: (!hasError) ? colors.grey.light : colors.red,
    borderStyle: 'solid',
    padding: '5px 20px',
    marginBottom: (!hasError) ? 20 : 0,
    width: '100%',
  }),
  error: {
    fontSize: fonts.size.xxs,
    color: colors.red,
    marginTop: 3,
    marginBottom: 17,
  },
};

const CurrencyInput = ({
  amount,
  error,
  onChange,
  placeholder,
}) => (
  <div>
    <input
      type="text"
      value={amount}
      onChange={onChange}
      placeholder={placeholder}
      style={styles.input(error)}
    />
    {error && <div style={styles.error}>{error}</div>}
  </div>
);

CurrencyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  placeholder: PropTypes.string,
};

CurrencyInput.defaultProps = {
  amount: null,
  error: false,
  placeholder: '',
};

export default CurrencyInput;
