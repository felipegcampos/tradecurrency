import math from 'mathjs';
import { CURRENCY } from 'consts';

export const currencyToString = (currency, amount) => {
  const { precision } = CURRENCY[currency];
  return math.format(amount, {
    notation: 'fixed',
    precision,
  });
};

export const currencyToNumber = (currency, amount) => {
  let newAmount = math.number(amount);
  newAmount = currencyToString(currency, newAmount);
  return math.number(newAmount);
};
