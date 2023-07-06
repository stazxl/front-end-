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
  TextField,
  Toolbar,
  SaveButton,
  CreateButton,
  Datagrid,
  required,
  BooleanField,
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
  <List title="Modifier Réglage" {...props}>
    <Datagrid rowClick='edit' bulkActionButtons={false}>
      <BooleanField source="engageOuNon" label="Est engagé ?" />
      <TextField source="début_CasMedicaux" label="début des cas médicaux" />
      <TextField source="début_demenagement" label="début des déménagement" />
      <TextField source="début_lignesImpayeesMois" label="début des impayés" />
      <TextField source="début_suspensionPro" label="début des suspensions professionnels" />
      <TextField source="dureé_CasMedicaux" label="dureé des cas médicaux" />
      <TextField source="dureé_demenagement" label="dureé des déménagement" />
      <TextField source="dureé_lignesImpayeesMois" label="dureé des impayés" />
      <TextField source="dureé_suspensionPro" label="dureé suspensions professionnels" />
    </Datagrid>
  </List>
);

// Composant de la liste des réglages
export const CustomSettingsEdit = () => (
  <Edit title="Modifier Réglage">
    <SimpleForm>
      <TextInput source="début_CasMedicaux" label="début des cas médicaux" />
      <TextInput source="début_demenagement" label="début des déménagement" />
      <TextInput source="début_lignesImpayeesMois" label="début des impayés" />
      <TextInput source="début_suspensionPro" label="début des suspensions professionnels" />
      <TextInput source="dureé_CasMedicaux" label="dureé des cas médicaux" />
      <TextInput source="dureé_demenagement" label="dureé des déménagement" />
      <TextInput source="dureé_lignesImpayeesMois" label="dureé des impayés" />
      <TextInput source="dureé_suspensionPro" label="dureé suspensions professionnels" />
    </SimpleForm>
  </Edit>
);