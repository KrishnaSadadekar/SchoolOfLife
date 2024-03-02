import axios from "axios";
import { setAuthToken } from "../auth/auth";
const loginAdmin = (loginDetail) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:8080/auth/login`, loginDetail)
      .then((response) => {
        resolve(response.data);
        setAuthToken(response.data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
        // You might want to throw an error here or handle it accordingly.
      });
  });
};

export default loginAdmin;

