import axios from "axios";

//TODO: env this sheez
const API = "http://localhost:4000";
export default async (userName, password) => {
  try {
    const response = await axios.post(`${API}/login`, {
      emailAddress: userName,
      password,
    });
    console.log("response is", response);
    if (response.auth) {
      return response.token;
    }
  } catch (e) {
    console.log("erp err", e);
    return null;
  }
};
