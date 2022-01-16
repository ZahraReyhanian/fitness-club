import simpleRestProvider from "ra-data-simple-rest";
import addUploadFeature from "./addUploadFeature";
import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem("x-auth-token");
  //   if (!options.headers) {
  //     options.headers = new Headers({ Accept: "application/json" });
  //   }
  //   options.headers.set("Authorization", `Bearer ${token}`);

  if (url.includes("?")) url = url + "&api_token=" + token;
  else url = url + "?api_token=" + token;

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:8000/api/v1/admin",
  httpClient
);

const uploadCapableDataProvider = addUploadFeature(dataProvider);

export default uploadCapableDataProvider;
