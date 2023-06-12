import * as React from 'react';
import {
  Admin,
  fetchUtils,
  ListGuesser,
  Resource,
  
} from 'react-admin';

import simpleRestProvider from 'ra-data-simple-rest';
import Dashboard from './Page/dashboard/dashboard';

//Import of our dataProvider function
import jsonServerProvider from 'ra-data-json-server';

//list et methode 
import{ ItemsList, ItemsShow,ItemsCreate,ItemsEdit } from './Page/Items/Items.js';
import{ CustomSettingsCreate,CustomSettingsList,CustomSettingsEdit } from './Page/settings/Settings';
import{ formulaire2List, formulaire2Show,formulaire2Create,formulaire2Edit } from './Page/formulaire/formulaire2.js';

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
    <Admin dataProvider={dataProvider}dashboard={Dashboard} DataProvider={simpleRestProvider('http://localhost:3000/')}>        
      <Resource name="Items" create={ItemsCreate} list={ItemsList} show={ItemsShow} edit={ItemsEdit} />
       <Resource name="formulaires2" list={formulaire2List} create={formulaire2Create} show={formulaire2Show} edit={formulaire2Edit} />
       <Resource name="settings" list={CustomSettingsList} edit={CustomSettingsEdit} create={CustomSettingsCreate} />
    </Admin>
    
  )
}



export default App;
 
