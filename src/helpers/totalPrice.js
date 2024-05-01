export const totalPrice = (array) => {
  const result = array.reduce((acc, currentItem) => {
    acc += currentItem.current_price;
    return acc;
  }, 0);

  return result;
};
