import React from "react";
import { fetchUtils, Admin, Resource } from "react-admin";
import { GYM, GYMEdit, GYMCreate } from "./gym";
import { aboutList, aboutEdit, aboutCreate } from "./aboutus";
import { callList, callEdit, callCreate } from "./callUs";
import { Users, UserEdit, UserCreate } from "./users";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import CallIcon from "@material-ui/icons/Call";
import GymIcon from "@material-ui/icons/FitnessCenter";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import dataProvider from "./dataProvider";
import MyDataProvider from "./myDataProvider";

// const fetchJson = (url, options = {}) => {
//   options.user = {
//     authenticated: true,
//     api_token: localStorage.getItem("x-auth-token"),
//   };
//   return fetchUtils.fetchJson(url, options);
// };

const httpClient = (url, options = {}) => {
  const token = localStorage.getItem("x-auth-token");
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  //   options.headers.set("Authorization", `Bearer ${token}`);

  if (options.method === "POST") {
    const body = JSON.parse(options.body);
    if (body.image) {
      // const file = body.image;
      // let form = new FormData();
      // if (file && file.rawFile) {
      //   form.append("file", file.rawFile);
      // }
      // body.image = form;
      // options.body = JSON.stringify(body);
      // console.log("opt :::: " + options.body);
    }
  }
  // case CREATE:
  // options.method = 'POST'

  // if (resource === 'photos') {
  //   const { file, ...model } = params.data
  //   let form = new FormData()

  //   if (file && file.rawFile) {
  //     form.append('file', file.rawFile)
  //   }

  //   options.body = form
  // }

  if (url.includes("?")) url = url + "&api_token=" + token;
  else url = url + "?api_token=" + token;

  return fetchUtils.fetchJson(url, options);
};

// const dataProvider = jsonServerProvider(
//   "http://localhost:8000/api/v1/admin",
//   httpClient
// );

// const dataProvider = simpleRestProvider(
//   "http://localhost:8000/api/v1/admin",
//   httpClient
// );

const AdminPanel = () => {
  return (
    <Admin
      catchAll={NotFound}
      dashboard={Dashboard}
      dataProvider={MyDataProvider}
    >
      <Resource
        name="gym"
        list={GYM}
        edit={GYMEdit}
        create={GYMCreate}
        icon={GymIcon}
      />
      <Resource
        name="aboutUs"
        list={aboutList}
        edit={aboutEdit}
        create={aboutCreate}
        icon={PostIcon}
      />
      <Resource
        name="callUs"
        list={callList}
        edit={callEdit}
        create={callCreate}
        icon={CallIcon}
      />
      {/* <Resource
        name="exercises"
        list={exerciseList}
        edit={exerciseEdit}
        create={exerciseCreate}
        icon={GymIcon}
      /> */}
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
