import React, { useState } from 'react';
import { List, Datagrid, DateField } from 'react-admin';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', value: 500 },
  { month: 'Fev', value: 800 },
  { month: 'Mar', value: 500 },
  { month: 'Avr', value: 800 },
  { month: 'Mai', value: 500 },
  { month: 'Jun', value: 800 },
  { month: 'Jul', value: 500 },
  { month: 'Aug', value: 800 },
  { month: 'Sep', value: 500 },
  { month: 'Oct', value: 800 },
  { month: 'Nov', value: 500 },
  { month: 'Dec', value: 800 },
];

const simu = () => {
  return (
    <div>
      <div style={{ width: '50%', margin: '0 auto' }}>
        <LineChart width={400} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
      <List title="Échéancier sur 12 mois" perPage={12} pagination={false}>
        <Datagrid>
          <DateField source="date" label="Mois" />
        </Datagrid>
      </List>
    </div>
  );
};

function Formulaire() {
  const [nombreMaladies, setNombreMaladies] = useState(0);
  const [prixAbonnement, setPrixAbonnement] = useState(0);
  const [montantTotal, setMontantTotal] = useState(0);

  const calculerMontantTotal = () => {
    const resultatCalcul = nombreMaladies * prixAbonnement;
    setMontantTotal(resultatCalcul);
  };

  return (
    <div>
      <label htmlFor="nombreMaladies">Nombre de maladies :</label>
      <input
        id="nombreMaladies"
        type="number"
        value={nombreMaladies}
        onChange={(e) => setNombreMaladies(Number(e.target.value))}
      />

      <label htmlFor="prixAbonnement">Prix de l'abonnement :</label>
      <input
        id="prixAbonnement"
        type="number"
        value={prixAbonnement}
        onChange={(e) => setPrixAbonnement(Number(e.target.value))}
      />

      <button onClick={calculerMontantTotal}>Calculer</button>
      <p>Montant total : {montantTotal}</p>
    </div>
  );
}

export { simu, Formulaire };







import React, { useState } from 'react';

function SquareInput() {
  const [valeur, setValeur] = useState('');
  const [engagement, setEngagement] = useState(false);

  const handleInputChange = (event) => {
    setValeur(event.target.value);
  };

  const handleEngagementChange = (event) => {
    setEngagement(event.target.checked);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#ccc',
            marginRight: 10,
          }}
        ></div>
        <input
          type="number"
          value={valeur}
          onChange={handleInputChange}
          style={{ marginRight: 10 }}
        />
        <span>€/mois</span>
      </div>
      <div>
        <label>
          Engagement :
          <input
            type="checkbox"
            checked={engagement}
            onChange={handleEngagementChange}
          />
        </label>
      </div>
    </div>
  );
}

export default SquareInput;