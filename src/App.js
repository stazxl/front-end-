import * as React from 'react';
import {
  Admin,
  fetchUtils,
  ListGuesser,
  Resource,
} from 'react-admin';

//Import of our dataProvider function
import jsonServerProvider from 'ra-data-json-server';

//Header
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = JSON.parse(localStorage.getItem('token'));
  options.headers.set('Authorization', `Bearer ${token}`);
  options.headers.set('Access-Control-Expose-Headers','Content-Range');

  options.user = {
    authenticated: true,
    id : token.id ,
    permissions : token.role,
    id_cp_number : token.id_cp_number,
    society_name : token.society_name,
    user : token.user
  }
  
  return fetchUtils.fetchJson(url, options);
};

export const backURL ="http://localhost:5000"

const dataProvider = jsonServerProvider(apiURL, httpClient);
const dataProviderGuesser = jsonServerProvider('https://jsonplaceholder.typicode.com')
function App(){
  const token = localStorage.getItem('token')

  if(!token) {
    return <Login />
  }

  return (
    <Admin dataProvider={dataProviderGuesser}>        
      <Resource name="Items" list={ListGuesser}/>
    </Admin>
  )
}

export default App;
