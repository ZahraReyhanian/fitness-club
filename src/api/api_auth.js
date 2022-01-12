import { getAxiosInstanceApi, getAxiosInstanceAuth } from "./api";

export const loginApi = (user, callback) => {
  getAxiosInstanceAuth()
    .post("auth/login", user)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response);
    });
};

export const registerApi = (user, callback) => {
  getAxiosInstanceAuth()
    .post("auth/register", user)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const uploadUserPhoto = (photo, callback) => {
  getAxiosInstanceApi()
    .post("uploadUserPhoto", photo)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response);
    });
};
