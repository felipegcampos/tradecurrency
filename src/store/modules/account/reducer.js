import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import cloneDeep from 'lodash/cloneDeep';
import * as actions from './actions';

export const initialState = {
  balance: {
    usd: 156.12,
    btc: 0,
  },
};

const setBalance = (state, { payload: { currency, balance } }) =>
  update(state, {
    balance: {
      [currency]: { $set: balance },
    },
  });

export const reducer = handleActions({
  [actions.withdraw]: {
    next: setBalance,
  },
  [actions.deposit]: {
    next: setBalance,
  },
}, cloneDeep(initialState));

export default reducer;
