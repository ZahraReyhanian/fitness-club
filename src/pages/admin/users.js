import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  EmailField,
} from "react-admin";

export const Users = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
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
