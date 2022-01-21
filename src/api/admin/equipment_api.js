import { getAxiosInstanceApi, getAxiosInstanceAuth } from "../api";

export const getAllEquipments = (callback) => {
  getAxiosInstanceAuth()
    .get(
      "/admin/sportsEquipment?api_token=" + localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const dataRes = response.data.data.SP;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getEditEquipment = (data, callback) => {
  getAxiosInstanceAuth()
    .get(
      "/admin/sportsEquipment/" +
        data +
        "/edit?api_token=" +
        localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const dataRes = response.data.data.SP;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const updateEquipment = (id, data, callback) => {
  getAxiosInstanceAuth()
    .put(
      "/admin/sportsEquipment/" +
        id +
        "?api_token=" +
        localStorage.getItem("x-auth-token"),
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

export const createEquipment = (data, callback) => {
  getAxiosInstanceAuth()
    .post(
      "/admin/sportsEquipment/create?api_token=" +
        localStorage.getItem("x-auth-token"),
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

export const deleteEquipmentApi = (data, callback) => {
  getAxiosInstanceAuth()
    .delete(
      "/admin/sportsEquipment/" +
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
