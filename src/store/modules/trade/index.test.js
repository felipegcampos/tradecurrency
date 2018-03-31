import 'polyfill'; // Bluebird promise

import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import assign from 'lodash/assign';
import { http } from 'helpers/http';
import { middleware } from 'store/createStore';
import {
  reducer,
  initialState,
  showLoading,
  getQuote,
  setAmount,
  execute,
} from './index';

const axiosMock = new MockAdapter(http);
const mockStore = configureMockStore(middleware);

describe('trade module', () => {
  let state;

  beforeEach(() => {
    state = assign({}, initialState);
  });

  it('should show loading', () => {
    const action = showLoading(true);
    const result = reducer(state, action);
    expect(result.loading).toEqual(true);
  });

  it('should set amount', () => {
    const action = setAmount(5.2);
    const result = reducer(state, action);
    expect(result.amount).toEqual(5.2);
  });

  it('should execute trade', () => {
    state = assign(state, {
      amount: 10,
      quote: 0.0031,
    });
    const store = mockStore({});
    return store.dispatch(execute)
      .then((action) => {
        const result = reducer(state, action);

        expect(result.quote).toEqual(initialState.quote);
        expect(result.loading).toEqual(initialState.loading);
        expect(result.error).toEqual(initialState.error);
        expect(result.amount).toEqual(initialState.amount);

        return null;
      });
  });

  describe('getQuote', () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it('should return error', () => {
      axiosMock.onGet().reply(400, {
        statusCode: 400,
        error: 'Bad Request',
        message: 'Invalid request query input',
      });
      const store = mockStore({});
      return store.dispatch(getQuote(-5))
        .then((action) => {
          const result = reducer(state, action);

          expect(result.quote).toBeNull();
          expect(result.loading).toEqual(false);
          expect(result.error).toEqual('Minimum is 1 USD');

          return null;
        });
    });

    it('should return quote', () => {
      axiosMock.onGet().reply(200, {
        type: 'trade',
        attributes: {
          quote: 0.00014203,
        },
      });
      const store = mockStore({});
      return store.dispatch(getQuote(1))
        .then((action) => {
          const result = reducer(state, action);

          expect(result.quote).toEqual(0.00014203);
          expect(result.loading).toEqual(false);
          expect(result.error).toEqual(false);

          return null;
        });
    });
  });
});
