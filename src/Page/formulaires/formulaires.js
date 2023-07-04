import React from 'react';
import { Avatar, Box, } from '@mui/material';
import {
  Edit,
  DateField,
  Datagrid,
  List,
  NumberField,
  Show,
  TextField,
  EditButton,
  ShowButton,
  SimpleShowLayout,
  ArrayInput ,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  NumberInput,
  DateInput,
  BooleanInput,
  BooleanField,
  ReferenceManyField,
  Button ,
  ReferenceField 
} from 'react-admin';

export const FormulairesCreate = () => {
  return (
  <Create>
    <SimpleForm>
      <Avatar
        alt="assur abo"
        src="https://media.licdn.com/dms/image/C4D0BAQEftEYsjKJT8w/company-logo_200_200/0/1547906454904?e=2147483647&v=beta&t=pqbkplLUpBA3yVh8sO6UBDcvqa1gTuzQwX0kJ63ll_8"
        sx={{ width: 200, height: 200, marginBottom: '0rem' }}
      />

      <h1>Information sur le prospect :</h1>
      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="email" label="Email" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="prenom" label="Prénom" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="nom" label="Nom" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="numeroTelephone" label="Numéro de téléphone" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="intitulePoste" label="Intitulé du poste" />
        </Box>
       
      </Box>

      <h1>Information sur l'entreprise :</h1>
      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="nomEntreprise" label="Nom de l'entreprise" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="codePostal" label="Code postal" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="adresse" label="Adresse" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="ville" label="Ville" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="urlSiteWeb" label="URL du site web" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="nombreAbonnes" label="Nombre d'abonnés" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="nouveauxInscrisMois" label="Nouveaux inscrits par mois" />
        </Box>
      </Box>
      <h1>Types d'abonnement :</h1>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <ArrayInput source="abonnements" reference="Abonnements">
            <SimpleFormIterator inline>
              <NumberInput source="price" label=" Price" /> 
              <BooleanInput source="engagement" label=" Engagement" />
               <NumberInput source="CasMedicaux" label="Cas Médicaux" />
              <NumberInput source="demenagement" label="Déménagement" />
              <NumberInput source="lignesImpayeesMois" label="impayées par mois" />
              <NumberInput source="suspensionPro" label="Suspension Professionnelles" />
            </SimpleFormIterator>
          </ArrayInput>
        </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        <p>
          Si vous mettez Assur Abo en place, vous préféreriez que ce soit pour tous vos clients ou seulement pour les
          nouveaux ?
        </p>
        <BooleanInput source="active" label="Tous les abonnés" />
      </Box>

      <Button type="submit" label="Submit" />
    </SimpleForm>
  </Create>
);
};

export const FormulairesList = () => (

  <List hasCreate={true}>
    <Datagrid rowClick='edit' bulkActionButtons={false}>
      <TextField source="nomEntreprise" label="nom de l'entreprise" />
      <TextField source="nom" label="nom" />
      <TextField source="prenom" label="prénom" />
      <TextField source="email" label="email" />
      <NumberField source="numeroTelephone" label="numéro de téléphone" />
      <TextField source="ville" label="ville" />
      <NumberField source="codePostal" label="code postal" />
      <DateField source="createdAt" label="Date" />
      <ShowButton />
    </Datagrid>
  </List>
);

export const FormulairesShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="email" label="Email" />
      <TextField source="prenom" label="Prénom" />
      <TextField source="nom" label="Nom" />
      <NumberField source="numeroTelephone" label="Numéro de téléphone" />
      <TextField source="intitulePoste" label="Intitulé du poste" />
      <TextField source="nomEntreprise" label="Nom de l'entreprise" />
      <TextField source="adresse" label="Adresse" />
      <NumberField source="codePostal" label="Code postal" />
      <TextField source="ville" label="ville" />
      <TextField source="urlSiteWeb" label="URL du site web" />
      <NumberField source="nombreAbonnes" label="Nombre d'abonnés" />
      <NumberField source="nouveauxInscrisMois" label="Nouveaux inscrits par mois" />s
    </SimpleShowLayout>
  </Show>
);

export const FormulairesEdit = () => (
  <Edit>
    <SimpleForm>
      <Avatar
        alt="assur abo"
        src="https://media.licdn.com/dms/image/C4D0BAQEftEYsjKJT8w/company-logo_200_200/0/1547906454904?e=2147483647&v=beta&t=pqbkplLUpBA3yVh8sO6UBDcvqa1gTuzQwX0kJ63ll_8"
        sx={{ width: 200, height: 200, marginBottom: '0rem' }}
      />

      <h1>Information sur le prospect :</h1>
      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="email" label="Email" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="prenom" label="Prénom" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="nom" label="Nom" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="numeroTelephone" label="Numéro de téléphone" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="intitulePoste" label="Intitulé du poste" />
        </Box>
      </Box>

      <h1>Information sur l'entreprise :</h1>
      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
      <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="nomEntreprise" label="Nom de l'entreprise" />
        </Box>
      <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="codePostal" label="Code postal" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="adresse" label="Adresse" />
        </Box>
        
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="ville" label="Ville" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
        <Box sx={{ marginRight: '1rem' }}>
          <TextInput source="urlSiteWeb" label="URL du site web" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="nombreAbonnes" label="Nombre d'abonnés" />
        </Box>
        <Box sx={{ marginRight: '1rem' }}>
          <NumberInput source="nouveauxInscrisMois" label="Nouveaux inscrits par mois" />
        </Box>
      </Box>

      <h2>Types d'abonnement :</h2>
        <Box sx={{ marginRight: '1rem' }}> 
        <ArrayInput source="abonnement" reference="TypesAbo">
            <SimpleFormIterator inline>
              <NumberInput source="price" label=" Price" /> 
              <BooleanInput source="engagement" label=" Engagement" />
              <NumberInput source="CasMedicaux" label="Cas Médicaux" />
              <NumberInput source="demenagement" label="Déménagement" />
              <NumberInput source="lignesImpayeesMois" label="impayées par mois" />
              <NumberInput source="suspensionPro" label="Suspension Professionnelles" />
            </SimpleFormIterator>
          </ArrayInput>
          </Box>
      <Box sx={{ marginBottom: '1rem' }}>
        <p>
          Si vous mettez Assur Abo en place, vous préféreriez que ce soit pour tous vos clients ou seulement pour les
          nouveaux ?
        </p>
        <BooleanInput source="active" label="Tous les abonnés" />
      </Box>

      <Button type="submit" label="Submit" />
    </SimpleForm>
  </Edit>
);



