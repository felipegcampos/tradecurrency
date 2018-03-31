import { createSelector, createStructuredSelector } from 'reselect';
import get from 'lodash/get';

export const loadingSelector = state => get(state, 'trade.loading', false);
export const sourceCurrencySelector = state => get(state, 'trade.currency.source', 'usd');
export const targetCurrencySelector = state => get(state, 'trade.currency.target', 'btc');
export const amountSelector = state => get(state, 'trade.amount');
export const quoteSelector = state => get(state, 'trade.quote', '');
export const errorSelector = state => get(state, 'trade.error');

export const symbolCurrencySelector = createSelector(
  sourceCurrencySelector,
  targetCurrencySelector,
  (source, target) => ({
    symbol: `${target}${source}`,
  }),
);

export const currencySelector = createStructuredSelector({
  source: sourceCurrencySelector,
  target: targetCurrencySelector,
});

export const tradeSelector = createStructuredSelector({
  source: sourceCurrencySelector,
  target: targetCurrencySelector,
  symbol: symbolCurrencySelector,
  amount: amountSelector,
  quote: quoteSelector,
  error: errorSelector,
});
