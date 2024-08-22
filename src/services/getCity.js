import instance from "../shared/api/instance"

export const getCity = async ( cityName = '' ) => {
  try {
    const responce = await instance.get('/warehouse/', {
      params: { 
        city_name: cityName}
    });
    return responce.data;
  } catch (err) {
    console.error("Error fetching cities", err);
    throw err;
  }
};