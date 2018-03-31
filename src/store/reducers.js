import { combineReducers } from 'redux';
import { reducer as account } from './modules/account';
import { reducer as trade } from './modules/trade';

export const rootReducer = combineReducers({
  account,
  trade,
});

export default rootReducer;
