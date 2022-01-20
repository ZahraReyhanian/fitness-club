import { getAxiosInstanceApi, getAxiosInstanceAuth } from "../api";

export const getAllExercises = (callback) => {
  getAxiosInstanceAuth()
    .get("/admin/exercises?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const dataRes = response.data.data.exercises.docs;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getEditExercise = (data, callback) => {
  getAxiosInstanceAuth()
    .get(
      "/admin/exercises/" +
        data +
        "/edit?api_token=" +
        localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const dataRes = response.data.data.exercise;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const updateExercise = (id, data, callback) => {
  getAxiosInstanceAuth()
    .put(
      "/admin/exercises/" +
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

export const createExercise = (data, callback) => {
  getAxiosInstanceAuth()
    .post(
      "/admin/exercises/create?api_token=" +
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

export const deleteExerciseApi = (data, callback) => {
  getAxiosInstanceAuth()
    .delete(
      "/admin/exercises/" +
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
