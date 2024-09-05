import instance from "../shared/api/instance"

export const getWarehouseTypes = async  () => {
  try {
    const response = await instance.get('/warehouse-types/');
    return response.data;
  } catch (err) {
    console.error("Error fetching data", err);
    throw err;
  }
};