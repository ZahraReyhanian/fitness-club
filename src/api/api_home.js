import { getAxiosInstanceApi } from "./api";

export const getHome = (callback) => {
  getAxiosInstanceApi()
    .get("?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
      console.log(response);
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getUserPanel = (callback) => {
  getAxiosInstanceApi()
    .get("/user/panel?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const updateProfileSetting = (data, callback) => {
  getAxiosInstanceApi()
    .post(
      "user/panel/update?api_token=" + localStorage.getItem("x-auth-token"),
      data
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
