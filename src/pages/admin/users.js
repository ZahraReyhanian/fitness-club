import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  EmailField,
  EditButton,
  DeleteButton
} from "react-admin";

export const Users = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <EditButton basepath="/users" />
      <DeleteButton basepath="/users" />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />

      <TextInput source="name" />
      <TextInput type="email" source="email" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput type="email" source="email" />
      <TextInput type="password" source="password" />
    </SimpleForm>
  </Create>
);
