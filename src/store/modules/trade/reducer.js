import { handleActions } from 'redux-actions';
import cloneDeep from 'lodash/cloneDeep';
import toUpper from 'lodash/toUpper';
import update from 'immutability-helper';
import pick from 'lodash/pick';
import { sourceCurrencySelector } from './selectors';
import * as actions from './actions';

export const initialState = {
  loading: false,
  error: false,
  quote: null,
  amount: '',
  currency: {
    source: 'usd',
    target: 'btc',
  },
};

export const reducer = handleActions({
  [actions.showLoading]: {
    next: state => update(state, {
      loading: { $set: true },
    }),
  },
  [actions.getQuote]: {
    next: (state, { payload }) => update(state, {
      loading: { $set: false },
      error: { $set: false },
      quote: { $set: payload.attributes.quote },
    }),
    throw: (state, { payload: { response: { status } } }) => {
      if (status === 400) {
        const source = sourceCurrencySelector(state);
        return update(state, {
          loading: { $set: false },
          error: { $set: `Minimum is 1 ${toUpper(source)}` },
        });
      }
      return state;
    },
  },
  [actions.setAmount]: {
    next: (state, { payload }) =>
      update(state, {
        amount: { $set: payload },
      }),
  },
  [actions.execute]: {
    next: state => update(state, {
      $merge: pick(initialState, [
        'loading',
        'error',
        'quote',
        'amount',
      ]),
    }),
  },
}, cloneDeep(initialState));

export default reducer;
