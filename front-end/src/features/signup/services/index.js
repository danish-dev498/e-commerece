import axiosInstance from "@/lib/ApiClient";

export const signUpApi = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    localStorage.setItem("token", response.data.data.token);
    return response.data;
  } catch (error) {
    // throw new Error("Signup failed: " + error.message);

    return error.response.data;
  }
};

