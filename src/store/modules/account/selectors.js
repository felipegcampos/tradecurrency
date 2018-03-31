import get from 'lodash/get';

export const balanceSelector = state => get(state, 'account.balance', {});
export const singleBalanceSelector = (state, { currency }) => get(state, `account.balance[${currency}]`);
