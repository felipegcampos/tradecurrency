import React from 'react';
import AccountBalance from 'containers/AccountBalance';
import TradePanel from 'containers/TradePanel';
import { colors } from 'styles/theme';

const style = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: colors.grey.white,
    padding: '20px 40px 40px 40px',
    minWidth: 350,
  },
};

const App = () => (
  <div style={style.root}>
    <div style={style.box}>
      <AccountBalance />
      <TradePanel />
    </div>
  </div>
);

export default App;
