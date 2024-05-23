export const totalPrice = (array) => {
  const result = array.reduce((acc, currentItem) => {
    acc +=
      Number(currentItem.product.discount_price) ||
      Number(currentItem.product.price);
    return acc;
  }, 0);

  return result;
};
