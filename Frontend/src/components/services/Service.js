import axios from "axios";
import { doLogin } from "../auth/auth";

const loginAdmin=(loginDetail)=>{

    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:8080/auth/login`, loginDetail)
          .then((response) => {
            resolve(response.data);
            doLogin(response.data);
          })
          .catch((error) => {
            alert('Invalid user name or password'); 
            console.error(error);
            reject(error);
            // You might want to throw an error here or handle it accordingly.
          });
      });
    };


    // -----------------------------

export default loginAdmin;

