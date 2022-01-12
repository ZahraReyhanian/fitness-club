import axios from "axios";

const add = "http://localhost:8000/api/v1/";

export const getAxiosInstanceJsonServer = () => {
  return axios.create({
    baseURL: add,
    headers: {
      "x-auth-token": localStorage.getItem("x-auth-token"),
    },
  });
};

export const getAxiosInstanceAuth = () => {
  return axios.create({
    baseURL: add,
    withCredentials: false,
    headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};
export const getAxiosInstanceApi = () => {
  return axios.create({
    baseURL: add,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //"x-auth-token": localStorage.getItem("x-auth-token"),
    },
  });
};
