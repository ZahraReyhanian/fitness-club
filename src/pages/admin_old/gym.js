import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  EditButton,
  DeleteButton,
} from "react-admin";

export const GYM = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="gymName" />
      <TextField source="gymText" />
      <ImageField source="image" />
      <EditButton basepath="/gym" />
      <DeleteButton basepath="/gym" />
    </Datagrid>
  </List>
);

export const GYMEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />

      <TextInput source="gymName" />
      <TextInput multiline source="gymText" />
      <ImageInput source="image" label="Related image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

const PreviewImage = ({ record, source }) => {
  if (typeof record == "string") {
    record = {
      [source]: record,
    };
  }
  return <ImageField record={record} source={source} />;
};

export const GYMCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="gymName" />
      <TextInput multiline source="gymText" />
      <ImageInput
        source="image"
        label="Images"
        accept="image/png, image/jpg, image/jpeg, image/svg"
        maxSize={5000000}
      >
        <PreviewImage source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
