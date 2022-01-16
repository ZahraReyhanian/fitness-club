import * as React from "react";
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

export const aboutList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="aboutUs" />
      <ImageField source="image" />
      <EditButton basepath="/about" />
      <DeleteButton basepath="/about" />
    </Datagrid>
  </List>
);

export const aboutEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />

      <TextInput source="title" />
      <TextInput multiline source="aboutUs" />
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

export const aboutCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="aboutUs" />
      <ImageInput
        source="image"
        label="Images"
        accept="image/png, image/jpg, image/jpeg"
        maxSize={5000000}
      >
        <PreviewImage source="src" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
