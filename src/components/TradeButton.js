import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';
import { colors, fonts } from 'styles/theme';

const styles = {
  button: disabled => ({
    height: 60,
    color: colors.white,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.bold,
    backgroundColor: colors.blue,
    width: '100%',
    border: 'none',
    letterSpacing: 2,
    cursor: (!disabled) ? 'pointer' : 'not-allowed',
    opacity: (!disabled) ? 1 : 0.4,
  }),
};

const TradeButton = ({
  error,
  quote,
  onSubmit,
  loading,
}) => {
  const isDisabled = (error || !quote || loading);
  const disableProp = (isDisabled) ? { disabled: 'disabled' } : {};
  return (
    <button
      type="button"
      onClick={onSubmit}
      style={styles.button(isDisabled)}
      {...disableProp}
    >
      {!loading && 'Trade'}
      {loading && <Loading />}
    </button>
  );
};

TradeButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  quote: PropTypes.number,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  loading: PropTypes.bool,
};

TradeButton.defaultProps = {
  quote: null,
  error: false,
  loading: false,
};

export default TradeButton;
