export const getPriceLine = (array) => {
  if (array.length === 0) {
    return 0;
  }

  let min = parseInt(array[0].discount_price);

  for (let i = 1; i < array.length; i++) {
    if (parseInt(array[i].discount_price) < min) {
      min = parseInt(array[i].discount_price);
    }
  }

  let max = parseInt(array[0].discount_price);

  for (let i = 1; i < array.length; i++) {
    if (parseInt(array[0].discount_price) > max) {
      max = parseInt(array[0].discount_price);
    }
  }

  return [min, max];
};
