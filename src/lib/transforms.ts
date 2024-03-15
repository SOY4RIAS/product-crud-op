export const transformCurrency = (value: string) => {
  return Number(value).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
