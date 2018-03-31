import React from 'react';
import { shallow } from 'enzyme';
import AccountBalance from './AccountBalance';
import CurrencyBalance from './CurrencyBalance';

describe('AccountBalance', () => {
  let props;
  let wrapper;

  const getWrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<AccountBalance {...props} />);
    }
    return wrapper;
  };

  beforeEach(() => {
    props = {
      balance: { usd: 105, btc: 0.0003 },
    };
    wrapper = undefined;
  });

  it('should be a div', () => {
    expect(getWrapper().is('div')).toEqual(true);
  });

  it('should have a h1', () => {
    expect(getWrapper().find('h1').length).toEqual(1);
  });

  it('should render CurrencyBalance', () => {
    expect(getWrapper().find(CurrencyBalance).length).toEqual(2);
  });

  it('should pass props to CurrencyBalance', () => {
    getWrapper().find(CurrencyBalance).forEach((node) => {
      expect(props.balance).toHaveProperty(node.key());
      expect(props.balance).toHaveProperty(node.prop('currency'));
      expect(node.prop('amount')).toEqual(props.balance[node.prop('currency')]);
    });
  });

  describe('when balance is empty', () => {
    beforeEach(() => {
      props.balance = {};
    });

    it('should not render CurrencyBalance', () => {
      expect(getWrapper().find(CurrencyBalance).length).toEqual(0);
    });
  });
});
