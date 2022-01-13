import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { Users, UserEdit, UserCreate } from "./users";
import jsonServerProvider from "ra-data-json-server";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";

// const fetchJson = (url, options = {}) => {
//   options.user = {
//     authenticated: true,
//     api_token: localStorage.getItem("x-auth-token"),
//   };
//   return fetchUtils.fetchJson(url, options);
// };

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

const dataProvider = jsonServerProvider(
  "http://localhost:8000/api/v1/admin",
  httpClient
);

const AdminPanel = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="gym"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource
        name="users"
        list={Users}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon}
      />
    </Admin>
  );
};

export default AdminPanel;
