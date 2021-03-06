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

export const resetEmailApi = (user, callback) => {
  getAxiosInstanceAuth()
    .post("password/email", user)
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const resetApi = (token, user, callback) => {
  user.token = token;
  console.log(user);
  getAxiosInstanceAuth()
    .post("auth/password/reset", user)
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
    .post(
      "user/panel/updateImage?api_token=" +
        localStorage.getItem("x-auth-token"),
      photo
    )
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response);
    });
};
