import { Admin, Resource, ListGuesser, fetchUtils, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Access-Control-Expose-Headers','Content-Range');
   

    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:5000',httpClient);

function App () {
    return(
        <Admin dataProvider={dataProvider}>
        +   <Resource name="Items" list={ListGuesser} />
        </Admin>
    );
}
export default App
    