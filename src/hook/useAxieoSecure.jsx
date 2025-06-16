import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://homerepairservices-server.vercel.app",
});
const useAxieoSecure = () => {
  const { user, logOut } = useContext(AuthContex)
  AxiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  // interceptor Response
  AxiosInstance.interceptors.response.use(response => {
    return response;
  },
    error => {
      if (error.status == 401 || error.status==403) {
        logOut()
          .then(() => console.log("User log out for statsu 4o1"))
          .catch((err) => {
           
          });
      }
   
        return Promise.reject(error);
    });

  return AxiosInstance;
};

export default useAxieoSecure;
