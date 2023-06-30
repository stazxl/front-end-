// importations nécessaires
import * as React from "react";
import {
  List,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  ListButton,
  EditButton,
  DeleteButton,
  Toolbar,
  SaveButton,
  CreateButton,
  Datagrid,
  required,
} from "react-admin";
import SettingsIcon from "@mui/icons-material/Settings";

// Composant personnalisé pour la barre d'outils
export const CustomSettingsToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
    <ListButton basePath="/settings" label="Retour" icon={<SettingsIcon />} />
  </Toolbar>
);

// Composant de la liste des réglages
export const CustomSettingsList = (props) => (
  <List title="Réglages" {...props}>
    <Datagrid>
      <TextInput source="id" label="ID" />
      <TextInput source="parametre1" label="Paramètre 1" />
      <TextInput source="parametre2" label="Paramètre 2" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Composant de l'édition d'un réglage
export const CustomSettingsEdit = (props) => (
  <Edit title="Modifier Réglage" {...props}>
    <SimpleForm toolbar={<CustomSettingsToolbar />}>
      <TextInput source="id" label="ID" disabled />
      <TextInput source="parametre1" label="Paramètre 1" />
      <TextInput source="parametre2" label="Paramètre 2" />
    </SimpleForm>
  </Edit>
);

// Composant de la création d'un réglage
export const CustomSettingsCreate = (props) => (
  <Create title="Créer Réglage" {...props}>
    <SimpleForm>
      <TextInput source="parametre1" label="Paramètre 1" />
      <TextInput source="parametre2" label="Paramètre 2" />
    </SimpleForm>
  </Create>
);
