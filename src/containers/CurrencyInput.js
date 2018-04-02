import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { createSelector, createStructuredSelector } from 'reselect';
import debounce from 'lodash/debounce';
import isNaN from 'lodash/isNaN';
import {
  showLoading,
  getQuote,
  setAmount,
  amountSelector,
  errorSelector,
  sourceCurrencySelector,
} from 'store/modules/trade';
import { singleBalanceSelector } from 'store/modules/account';
import { currencyToNumber } from 'helpers/currency';
import CurrencyInput from 'components/CurrencyInput';

// Dispatch request after user stop typing for x milliseconds.
const debounceGetCurrencyPair = debounce((dispatch, currency, amount, balance) => {
  let fmtAmount = '';
  if (amount) {
    // Simple regex to fix the input
    fmtAmount = amount.replace(/[^\d.]/g, '');
    if (fmtAmount) {
      // Fix invalid numbers
      fmtAmount = parseFloat(fmtAmount);
      // Set precision accordingly
      fmtAmount = currencyToNumber(currency, fmtAmount);
      // Do not overcome the balance
      fmtAmount = Math.min(fmtAmount, balance);
      // If for some reason amount is NaN
      fmtAmount = (isNaN(fmtAmount)) ? '' : fmtAmount;
    }
  }
  dispatch(setAmount(fmtAmount));
  dispatch(getQuote(fmtAmount));
}, 400, { leading: false });

const mapStateToProps = createStructuredSelector({
  amount: amountSelector,
  error: errorSelector,
  currency: sourceCurrencySelector,
});

const balanceSelector = createSelector(
  singleBalanceSelector,
  balance => ({ balance }),
);

const mapDispatchToProps = (dispatch, { balance, currency }) => ({
  setAmount(value) {
    // Show loading while debounce is not invoked
    dispatch(showLoading());
    dispatch(setAmount(value));
  },
  getQuote(amount) {
    debounceGetCurrencyPair(dispatch, currency, amount, balance);
  },
});

const enhance = compose(
  connect(mapStateToProps),
  connect(balanceSelector),
  connect(null, mapDispatchToProps),
  withHandlers({
    onChange: props => ({ target: { value } }) => {
      // if less then 30 chars
      if (value.length <= 30) {
        props.setAmount(value);
        props.getQuote(value);
      }
    },
  }),
);

export default enhance(CurrencyInput);
