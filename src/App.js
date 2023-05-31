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
// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//     options.headers = new Headers({ Accept: 'application/json' });
//   }
//   options.headers.set('Access-Control-Expose-Headers','Content-Range');
  
//   return fetchUtils.fetchJson(url, options);
// };

export const backURL ="http://localhost:5000"

//const dataProvider = jsonServerProvider(backURL, httpClient);
const dataProviderGuesser = jsonServerProvider('https://jsonplaceholder.typicode.com')

function App(){
  return (
    <Admin dataProvider={dataProviderGuesser}>        
      <Resource name="Items" list={ListGuesser}/>
    </Admin>
  )
}

export default App;
