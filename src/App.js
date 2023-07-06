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
import{ FormulairesList, FormulairesShow,FormulairesCreate,FormulairesEdit, } from './Page/formulaires/formulaires.js';
import { SimulationList,SimulationEdit } from './Page/simulations/simulations';
import {CustomSettingsEdit, CustomSettingsList } from './Page/settings/Settings';
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
    <Admin dataProvider={dataProvider} dashboard={Dashboard} DataProvider={simpleRestProvider('http://localhost:3000/')}>        
      {/* <Resource name="Items" create={ItemsCreate} list={ItemsList} show={ItemsShow} edit={ItemsEdit}  /> */}
      <Resource name="formulaires" list={FormulairesList} create={FormulairesCreate} show={FormulairesShow} edit={FormulairesEdit}  />
      <Resource name="simulations" list={SimulationList} edit={SimulationEdit} />
      { <Resource name="settings" list={CustomSettingsList} edit={CustomSettingsEdit}/> }
    </Admin>
    
  )
}



export default App;
 
