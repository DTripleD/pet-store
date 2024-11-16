import instance from "../shared/api/instance";

export const getProducts = async () => {
  try {
    const responce = await instance.get("/products/");
    console.log(responce);
    return responce.data;
  } catch (err) {
    console.error("Error fetching products", err);
    throw err;
  }
};
