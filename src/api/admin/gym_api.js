import { getAxiosInstanceApi, getAxiosInstanceAuth } from "../api";

export const getAdmin = (callback) => {
  getAxiosInstanceApi()
    .get("/admin/gym?api_token=" + localStorage.getItem("x-auth-token"))
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

export const getAllGym = (callback) => {
  getAxiosInstanceAuth()
    .get("/admin/gym?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const dataRes = response.data.data.gym.docs;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getEditGym = (data, callback) => {
  getAxiosInstanceAuth()
    .get(
      "/admin/gym/" +
        data +
        "/edit?api_token=" +
        localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const dataRes = response.data.data.gym;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const updateGym = (id, data, callback) => {
  getAxiosInstanceAuth()
    .put(
      "/admin/gym/" + id + "?api_token=" + localStorage.getItem("x-auth-token"),
      data
    )
    .then((response) => {
      const dataRes = response.data;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const createGym = (data, callback) => {
  getAxiosInstanceAuth()
    .post(
      "/admin/gym/create?api_token=" + localStorage.getItem("x-auth-token"),
      data
    )
    .then((response) => {
      const dataRes = response.data;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const deleteGymApi = (data, callback) => {
  getAxiosInstanceAuth()
    .delete(
      "/admin/gym/" +
        data +
        "?api_token=" +
        localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const dataRes = response.data;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};
