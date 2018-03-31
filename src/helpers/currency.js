import { CURRENCY } from 'consts';

export const currencyToString = (currency, amount) => {
  const { precision, force } = CURRENCY[currency];
  if (force) {
    return parseFloat(amount).toFixed(precision);
  }

  return (parseFloat(amount).toFixed(precision) / 1).toString();
};

export const currencyToNumber = (currency, amount) => {
  const { precision } = CURRENCY[currency];
  return parseFloat(parseFloat(amount).toFixed(precision));
};
