import React from 'react';
import { shallow } from 'enzyme';
import CurrencyInput from './CurrencyInput';

const props = {
  onChange: jest.fn(),
};

it('renders without crashing', () => {
  shallow(<CurrencyInput {...props} />);
});
