import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  EditButton,
  DeleteButton,
} from "react-admin";

export const callList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="phone1" />
      <TextField source="phone2" />
      <TextField source="address" />
      <TextField source="telegram" />
      <TextField source="instagram" />

      <EditButton basepath="/callUs" />
      <DeleteButton basepath="/callUs" />
    </Datagrid>
  </List>
);

export const callEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="phone1" />
      <TextInput source="phone2" />
      <TextInput source="address" />
      <TextInput source="telegram" />
      <TextInput source="instagram" />
    </SimpleForm>
  </Edit>
);

export const callCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="phone1" />
      <TextInput source="phone2" />
      <TextInput source="address" />
      <TextInput source="telegram" />
      <TextInput source="instagram" />
    </SimpleForm>
  </Create>
);
