import { getAxiosInstanceApi } from "./api";

export const getHome = (callback) => {
  getAxiosInstanceApi()
    .get("?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
      localStorage.setItem(
        "image",
        "http://localhost:8000/" + data.data.user.student[0].image
      );
      callback(true, data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getCallUs = (callback) => {
  getAxiosInstanceApi()
    .get("call-us?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getEquipment = (callback) => {
  getAxiosInstanceApi()
    .get("sportEquipment?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getExercise = (id, callback) => {
  getAxiosInstanceApi()
    .get(
      "exercise/" + id + "?api_token=" + localStorage.getItem("x-auth-token")
    )
    .then((response) => {
      const data = response.data;
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};

export const getExercises = (callback) => {
  getAxiosInstanceApi()
    .get("exercises?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
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
      const dataRes = response.data;
      callback(true, dataRes);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error.response);
    });
};
