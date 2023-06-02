import * as React from 'react';
import {
  Admin,
  fetchUtils,
  ListGuesser,
  Resource,
  
} from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
//Import of our dataProvider function


//list et methode 
import{ ItemsList, ItemsShow,ItemsCreate,ItemsEdit } from './Page/Items/Items.js';
import SignUp from './Page/formulaire/formulaire.js';
import MyForm from './Page/formulaire/formulaire.js';

//Header
const httpClient = (url, options = {}) => {
if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Access-Control-Expose-Headers','Content-Range');
  
  return fetchUtils.fetchJson(url, options);
};

export const backURL ="http://localhost:5000"

const dataProvider = jsonServerProvider(backURL, httpClient);

//Tout le monde peut effectuer des requêtes
function App(){
  return (
    <Admin dataProvider={dataProvider}>        
      <Resource name="Items" create={ItemsCreate} list={ItemsList} show={ItemsShow} edit={ItemsEdit} />
       <Resource name="formulaire" list={MyForm} />
      <Resource name="tableau de bord" list={ListGuesser} />
      <Resource name="paramètre" list={ListGuesser} />
    </Admin>
    
  )
}

export default App;
