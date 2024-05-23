import axiosInstance from "@/lib/ApiClient";

export const getAllCoffeeApi = async () => {
  try {
    const response = await axiosInstance.get("/products");

    return response.data;
  } catch (error) {
    console.log("check error over here", error);
    // throw new Error("Signup failed: " + error.message);

    return error.response.data;
  }
};
