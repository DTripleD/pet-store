export function getFilterList({
  min,
  max,
  discount,
  isNew,
  sortBy,
  searchValue,
}) {
  return [
    { title: "Новинки", key: "isNew", value: isNew },
    {
      title: "Знижки",
      key: "hasDiscount",
      value: discount,
    },
    {
      title: `${min}-${max}`,
      key: "price",
      value: min && max ? `${min}-${max}` : null,
    },
    {
      title: sortBy,
      key: "sortBy",
      value: sortBy,
    },
    {
      title: searchValue,
      key: "searchValue",
      value: searchValue,
    },
  ];
}
