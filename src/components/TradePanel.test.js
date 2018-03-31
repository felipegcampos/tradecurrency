import React from 'react';
import { shallow } from 'enzyme';
import TradePanel from './TradePanel';

it('renders without crashing', () => {
  shallow(<TradePanel />);
});
