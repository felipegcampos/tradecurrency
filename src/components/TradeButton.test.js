import React from 'react';
import { shallow } from 'enzyme';
import TradeButton from './TradeButton';

const props = {
  onSubmit: jest.fn(),
};

it('renders without crashing', () => {
  shallow(<TradeButton {...props} />);
});
