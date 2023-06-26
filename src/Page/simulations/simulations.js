import React, { useState, useEffect, useRef } from 'react';
import { List, Datagrid, DateField, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';
import { Chart } from 'chart.js';
import { Box } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const SimulationList = () => {
  return (
    <Box>
      <List>
        <Datagrid bulkActionButtons={false} rowClick="edit">
          <TextField source="nomEntreprise" />
          <TextField source="nombreAbonnes" />
          <TextField source="nouveauxInscrisMois" />
        </Datagrid>
      </List>
    </Box>
  );
};

export const SimulationEdit = () => {
  const [nombreMaladies, setNombreMaladies] = useState(0);
  const [prixAbonnement, setPrixAbonnement] = useState(0);
  const [montantTotal, setMontantTotal] = useState(0);
  const speedCanvasRef = useRef(null);
  const params = useParams();
  console.log('params', params);

  useEffect(() => {
    if (speedCanvasRef.current) {
      const speedData = {
        labels: ['0', '10', '20', '30', '40', '50', '60'],
        datasets: [
          {
            label: 'test',
            data: [0, 59, 75, 20, 20, 55, 40],
            tension: 0.4,
            cubicInterpolationMode: 'monotone',
            fill: false,
            borderColor: '#E64A19',
            backgroundColor: 'transparent',
            borderDash: [20, 10, 60, 10],
            pointBorderColor: '#E64A19',
            pointBackgroundColor: '#FFA726',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 4,
            pointStyle: 'rectRounded',
          },
        ],
      };

      const lineChart = new Chart(speedCanvasRef.current, {
        type: 'line',
        data: speedData,
      });

      return () => {
        lineChart.destroy();
      };
    }
  }, [nombreMaladies, prixAbonnement]);

// Getting providers info
const urlData = {
  url: 'Simulations/' + params.id,
  baseURL: 'http://localhost:5000/',
  method: 'get',
};
const queryFn = async () => {
  const response = await axios(urlData);
  return response.data;
};

const { isLoading, isError, data, error } = useQuery({
  queryKey: ['SimulationProviders n° ' + params.id],
  queryFn: queryFn,
});

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    return <span>Error: {error.message}</span>;
  } else {
    console.log('data', data);

    const calculerMontantTotal = () => {
      const resultatCalcul = nombreMaladies * prixAbonnement;
      setMontantTotal(resultatCalcul);
    };

    return (
      <div>
        <h1>Calcul du montant total</h1>
        <div>
          <label htmlFor="nombreMaladies">Nombre de maladies :</label>
          <input
            id="nombreMaladies"
            type="number"
            value={nombreMaladies}
            onChange={(e) => setNombreMaladies(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="prixAbonnement">Prix de l'abonnement :</label>
          <input
            id="prixAbonnement"
            type="number"
            value={prixAbonnement}
            onChange={(e) => setPrixAbonnement(Number(e.target.value))}
          />
        </div>
        <button onClick={calculerMontantTotal}>Calculer</button>
        <p>Montant total : {montantTotal}</p>
        <Box sx={{ width: '800px' }}>
          <canvas ref={speedCanvasRef} />
        </Box>
      </div>
    );
  }
};

