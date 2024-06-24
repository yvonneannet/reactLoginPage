const baseUrl = process.env.REACT_APP_BASE_URL;
export const getUsers = async () => {
  try {
    const response = await fetch(`${baseUrl}/users`);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getSingleUser = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};