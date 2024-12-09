export const fetchCategoryData = async (url) => {
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
