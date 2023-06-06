import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput, BooleanInput, Button } from 'react-admin';
import { Avatar, Box } from '@mui/material';
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
    SimpleShowLayout
} from 'react-admin';

const formulaire2 = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <Avatar
          alt="assur abo"
          src="https://media.licdn.com/dms/image/C4D0BAQEftEYsjKJT8w/company-logo_200_200/0/1547906454904?e=2147483647&v=beta&t=pqbkplLUpBA3yVh8sO6UBDcvqa1gTuzQwX0kJ63ll_8"
          sx={{ width: 100, height: 100, marginBottom: '1rem' }}
        />

        <h1>Information sur le prospect :</h1>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="email" label="Email" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="prénom" label="Prénom" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="nom" label="Nom" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="numéro de téléphone" label="Numéro de téléphone" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="intitulé du poste" label="Intitulé du poste" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="nom de l'entreprise" label="Nom de l'entreprise" />
          </Box>
        </Box>

        <h1>Information sur l'entreprise :</h1>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="code postal" label="Code postal" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="ville" label="Ville" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="URL du site web" label="URL du site web" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="nombre d'abonnés" label="Nombre d'abonnés" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="nouveaux inscris par mois" label="Nouveaux inscrits par mois" />
          </Box>
        </Box>

        <h2>Types d'abonnement :</h2>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="maladie" label="Maladie" />
          </Box>
          <Box sx={{ marginRight:'1rem' }}>
            <NumberInput source="blessure" label="Blessure" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="accident" label="Accident" />
          </Box>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="suspension pro" label="Suspension professionnelle" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <NumberInput source="lignes impayées /mois" label="Lignes impayées par mois" />
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <DateInput source="date" label="Date" />
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

export const formulaire2Create = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="color" />
            <TextInput source="type" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Create>
);

export const formulaire2List = () => (
    <List hasCreate={true}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="color" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <DateField source="updatedAt" />
            <EditButton/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const formulaire2Show = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
        <TextField source="name" />
            <NumberField source="price" />
            <TextField source="type" />
            <TextField source="color" />
            <NumberField source="quantity" />
        </SimpleShowLayout>       
    </Show>
);

export const formulaire2Edit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="name" />
            <NumberInput source="price" />
            <TextInput source="type" />
            <TextInput source="color" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);


export default formulaire2;
