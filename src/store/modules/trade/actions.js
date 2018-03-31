import { createAction } from 'redux-actions';
import { http } from 'helpers/http';
import Promise from 'bluebird';
import { withdraw, deposit } from 'store/modules/account';
import {
  symbolCurrencySelector,
  tradeSelector,
} from './selectors';

export const showLoading = createAction('@@trade/loading');

export const getQuote = createAction('@@trade/quote', amount => (dispatch, getState) => {
  const { symbol } = symbolCurrencySelector(getState());
  return http
    .get(`/trade/quote?symbol=${symbol}&amount=${amount}`)
    .get('data');
});

export const setAmount = createAction('@@trade/setAmount');

export const execute = createAction('@@trade/execute', (dispatch, getState) => {
  dispatch(showLoading());
  return Promise
    // adding a fake processing delay ( testing purposes )
    .delay(2000)
    .then(() => {
      const {
        source, target, amount, quote,
      } = tradeSelector(getState());
      dispatch(withdraw(source, amount));
      dispatch(deposit(target, quote));
      return null;
    });
});
