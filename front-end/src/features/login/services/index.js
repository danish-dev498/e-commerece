import axiosInstance from "@/lib/ApiClient";

export const SignInApi = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);
    localStorage.setItem("token", response.data.data.token);
    return response.data;
  } catch (error) {
    console.log("check error over here", error);
    // throw new Error("Signup failed: " + error.message);

    return error.response.data;
  }
};
