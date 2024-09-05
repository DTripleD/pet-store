const getItemQuantityText = (count) => {
  if (count === 0) return '0 товарів';
  if (count === 1) return '1 товар';
  if (count > 4) return `${count} товарів`;
  return `${count} товари`;
};

export default getItemQuantityText;