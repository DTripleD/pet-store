export const totalPrice = (array) => {
  const result = array.reduce((acc, currentItem) => {
    acc +=
      Number(currentItem.product.discount_price) * currentItem.quantity ||
      Number(currentItem.product.price) * currentItem.quantity;
    return acc;
  }, 0);

  return result;
};
