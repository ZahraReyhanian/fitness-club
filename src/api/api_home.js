import { getAxiosInstanceApi} from "./api";


export const getHome = (callback) => {
  getAxiosInstanceApi()
    .get("?api_token=" + localStorage.getItem("x-auth-token"))
    .then((response) => {
      const data = response.data;
        console.log(response)
      callback(true, data);
    })
    .catch((error) => {
      console.log(error);
      callback(false, error);
    });
};