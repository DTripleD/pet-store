import instance from "../shared/api/instance"

export const getCity = async () => {
  try {
    const responce = await instance.get('/warehouse/');
    return responce.data;
  } catch (err) {
    console.error("Error fetching cities", err);
    throw err;
  }
};