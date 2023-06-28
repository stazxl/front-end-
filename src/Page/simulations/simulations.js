import React, { useState, useEffect, useRef } from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';
import { Chart } from 'chart.js';
import { Box } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { NumberInput } from 'react-admin';

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
  const [casMedicaux, setCasMedicaux] = useState(0);
  const [demenagement, setDemenagement] = useState(0);
  const [lignesImpayeesMois, setLignesImpayeesMois] = useState(0);
  const [suspensionPro, setSuspensionPro] = useState(0);
  const [montantTotal, setMontantTotal] = useState(0);
  const [prixAbonnement, setPrixAbonnement] = useState(0); // Ajout de prixAbonnement
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
            data: [0, casMedicaux, demenagement, lignesImpayeesMois, lignesImpayeesMois, suspensionPro, 40],
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
  }, [casMedicaux, demenagement, lignesImpayeesMois, suspensionPro]);

  // Getting providers info
  const urlData = {
    url: 'Simulations/' + params.id,
    baseURL: 'http://localhost:5000/',
    method: 'get',
  };

  const queryFn = async () => {
    const response = await axios(urlData);
    const data = response.data;

    setCasMedicaux(data.CasMedicaux);
    setDemenagement(data.demenagement);
    setLignesImpayeesMois(data.lignesImpayeesMois);
    setSuspensionPro(data.suspensionPro);
    setPrixAbonnement(data.prixAbonnement);

    return data;
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
      const resultatCalcul = casMedicaux * prixAbonnement;
      setMontantTotal(resultatCalcul);
    };

    return (
      <div>
        <h1>Calcul du montant total</h1>
        <div>
        <NumberInput
            source="CasMedicaux"
            label="Cas Médicaux"
            onChange={(value) => setCasMedicaux(value)}
            input={{
              value: casMedicaux,
              onChange: (value) => setCasMedicaux(value),
           }}
        />
          <NumberInput
            source="demenagement"
            label="Déménagement"
            onChange={(value) => setDemenagement(value)}
            input={{
              value: casMedicaux,
              onChange: (value) => setDemenagement(value),
            }}
          />
          <NumberInput
            source="lignesImpayeesMois"
            label="Impayées par mois"
            onChange={(value) => setLignesImpayeesMois(value)}
            input={{
              value: casMedicaux,
              onChange: (value) => setLignesImpayeesMois(value),
            }}
          />
          <NumberInput
            source="suspensionPro"
            label="Suspension Professionnelles"
            onChange={(value) => setSuspensionPro(value)}
            input={{
              value: casMedicaux,
              onChange: (value) => setSuspensionPro(value),
            }}
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

