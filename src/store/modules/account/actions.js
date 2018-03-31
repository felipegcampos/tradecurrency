import { createAction } from 'redux-actions';
import { singleBalanceSelector } from './selectors';

// in a real scenario would exist a back-end check
export const withdraw = createAction('@@account/withdraw', (currency, amount) => (dispatch, getState) => {
  const balance = singleBalanceSelector(getState(), { currency });
  const newBalance = balance - amount;
  return {
    currency,
    balance: newBalance,
  };
});

// in a real scenario would exist a back-end check
export const deposit = createAction('@@account/deposit', (currency, amount) => (dispatch, getState) => {
  const balance = singleBalanceSelector(getState(), { currency });
  const newBalance = balance + amount;
  return {
    currency,
    balance: newBalance,
  };
});
