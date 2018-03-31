import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk-fsa';
import promise from 'redux-promise';
import rootReducer from './reducers';

// Middleware configuration
export const middleware = [
  thunk.withOpts({
    interrupt: true,
    next: true,
  }),
  promise,
];

// Store instantiation
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default store;
