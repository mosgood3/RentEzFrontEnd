import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const createLandlord = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/landlords/signup`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error.response?.data || "An error occurred";
  }
};

