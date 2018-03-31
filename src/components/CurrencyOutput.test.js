import React from 'react';
import { shallow } from 'enzyme';
import CurrencyOutput from './CurrencyOutput';

it('renders without crashing', () => {
  shallow(<CurrencyOutput />);
});
