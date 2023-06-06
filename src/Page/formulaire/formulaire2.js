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
    SimpleShowLayout,
   
} from 'react-admin';

export const formulaire2Create = () => (
    <Create>
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
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="nomEntreprise" label="Nom de l'entreprise" />
          </Box>
        </Box>

        <h1>Information sur l'entreprise :</h1>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="codePostal" label="Code postal" />
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
            <NumberInput source="suspensionPro	" label="Suspension professionnelle" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <NumberInput source="lignesImpayeesMois" label="Lignes impayées par mois" />
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

export const formulaire2List = () => (
    <List hasCreate={true}>
        <Datagrid>
        <TextInput source="email" label="email" />
        <TextInput source="prenom" label="prénom" />
        <TextInput source="nom" label="nom" />
        <NumberInput source="numeroTelephone" label="numéro de téléphone" />
        <TextInput source="intitulePoste" label="intitulé du poste" />
        <TextInput source="nomEntreprise" label="nom de l'entreprise" />
        <NumberInput source="codePostal" label="code postal" />
        <TextInput source="ville" label="ville" />
        <TextInput source="urlSiteWeb" label="URL du site web" />
        <NumberInput source="nombreAbonnes" label="nombre d'abonnés" />
        <NumberInput source="nouveauxInscrisMois" label="nouveaux inscrits par mois" />
        <NumberInput source="maladie" label="maladie" />
        <NumberInput source="blessure" label="blessure" />
        <NumberInput source="accident" label="accident" />
        <NumberInput source="suspensionPro" label="suspension pro" />
        <NumberInput source="lignesImpayeesMois" label="lignes impayées par mois" />
        <DateInput source="date" label="Date" />
            <ShowButton/>
        </Datagrid>
    </List>
);

export const formulaire2Show = () => (
    <Show>
        <SimpleShowLayout>
        <TextInput source="email" label="email" />
        <TextInput source="prenom" label="prénom" />
        <TextInput source="nom" label="nom" />
        <NumberInput source="numeroTelephone" label="numéro de téléphone" />
        <TextInput source="intitulePoste" label="intitulé du poste" />
        <TextInput source="nomEntreprise" label="nom de l'entreprise" />
        <NumberInput source="codePostal" label="code postal" />
        <TextInput source="ville" label="ville" />
        <TextInput source="urlSiteWeb" label="URL du site web" />
        <NumberInput source="nombreAbonnes" label="nombre d'abonnés" />
        <NumberInput source="nouveauxInscrisMois" label="nouveaux inscrits par mois" />
        <NumberInput source="maladie" label="maladie" />
        <NumberInput source="blessure" label="blessure" />
        <NumberInput source="accident" label="accident" />
        <NumberInput source="suspensionPro" label="suspension pro" />
        <NumberInput source="lignesImpayeesMois" label="lignes impayées par mois" />
        <DateInput source="date" label="Date" />
        </SimpleShowLayout>       
    </Show>
);

export const formulaire2Edit = () => (
    <Edit>
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
          <Box sx={{ marginRight: '1rem' }}>
            <TextInput source="nomEntreprise" label="Nom de l'entreprise" />
          </Box>
        </Box>

        <h1>Information sur l'entreprise :</h1>
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <Box sx={{ marginRight: '1rem' }}>
            <NumberInput source="codePostal" label="Code postal" />
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
            <NumberInput source="suspensionPro	" label="Suspension professionnelle" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <NumberInput source="lignesImpayeesMois" label="Lignes impayées par mois" />
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
    </Edit>
);



