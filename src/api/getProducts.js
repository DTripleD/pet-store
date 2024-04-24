export const getProducts = (productsId, animalId, value = []) => {
  return fetch(
    `http://127.0.0.1:8000/api/v1/products/?product_category=${productsId}&animal_category=${animalId}${
      value.length > 0 ? `&min_price=${value[0]}&max_price=${value[1]}` : ""
    }`
  ).then((res) => res.json());
};
