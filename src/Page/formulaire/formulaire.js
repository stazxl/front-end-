import React from 'react';
import { CheckboxGroupInput, Checkbox } from 'react-admin';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  BooleanInput,
  Button,
  TextField,
} from 'react-admin';
import { Avatar } from '@mui/material';

const MyForm = (props) => {
  return (
    <Create {...props}>

      <SimpleForm>
        <Avatar alt="assur abo" src="https://media.licdn.com/dms/image/C4D0BAQEftEYsjKJT8w/company-logo_200_200/0/1547906454904?e=2147483647&v=beta&t=pqbkplLUpBA3yVh8sO6UBDcvqa1gTuzQwX0kJ63ll_8" />
        <h1>Information sur le prospect :</h1>
        <div class="container">
        <TextInput source="email" label="email" />
        <TextInput source="prénom" label="prénom" />
        <TextInput source="nom" label="nom" />
        <NumberInput source="numéro de téléphone" label="numéro de téléphone" />
        </div>
        <div class="container">
        <TextInput source="intitulé du poste" label="intitulé du poste" />
        <TextInput source="nom de l'entreprise" label="nom de l'entreprise" />
        </div>
        <h1> information sur l'entreprise </h1>
        <div class="container">
        <NumberInput source="code postal" label="code postal" />
        <TextInput source="ville" label="ville" />
        </div>
        <div class="container">
        <TextInput source="URL du site web" label="URL du site web" />
        <NumberInput source="nombre d'abonnés" label="nombre d'abonnés" />
        <NumberInput source="nouveaux inscris par mois" label="nouveaux inscris par mois" />
        </div>
        <h2>Types d'abonnement</h2>



        <p>nombre de suspensions /mois </p>
        <div class="container">
        <NumberInput source="maladie" label="maladie" />
        <NumberInput source="blessure" label="blessure" />
        <NumberInput source="accident" label="accident " />
        <NumberInput source="suspension pro" label="suspension pro " />
        </div>
        <NumberInput source="lignes impayées /mois" label="lignes impayées /mois " />










        <DateInput source="date" label="Date" />
        <p>Si vous mettez Assur Abo en place vous préfèreriez que ce soit pour tous vos clients ou seulment pour les nouveaux ? </p>
        <BooleanInput source="active" label="tous les abonnés" />
        <Button>Submit</Button>

      </SimpleForm>     
    </Create>
    
  );
};

export default MyForm;
