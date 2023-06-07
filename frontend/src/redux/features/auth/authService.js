import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/users/`;

//register user
const register = async (userData) => {
   const response = await axios.post(API_URL + "signup", userData);
   return response.data;
};

//login user
const login = async (userData) => {
   const response = await axios.post(API_URL + "login", userData);
   return response.data.message;
};

//logout user
const logout = async (userData) => {
   const response = await axios.get(API_URL + "logout");
   return response.data;
};

const authService = {
   register, //key and value are same
   login,
   logout,
};

export default authService;
