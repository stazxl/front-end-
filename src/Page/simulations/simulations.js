import React, { useState, useEffect, useRef } from "react";
import { List, Datagrid, TextField, FileField } from "react-admin";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryScale,Chart,Utils, LinearScale,LineElement,PointElement } from "chart.js";
import { Line } from 'react-chartjs-2';
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
  const speedCanvasRef = useRef(null);
  const params = useParams(0);
  // Getting simulation info
  const urlData = {
    url: "Simulations/" + params.id,
    baseURL: "http://localhost:5000/",
    method: "get",
  };
  const requestSimulations = axios(urlData);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["SimulationProviders n° " + params.id],
    queryFn: () => requestSimulations,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    return <span>Error: {error.message}</span>;
  } else {
    const clubData = data.data
    const aboData = clubData.abonnements
    console.log('clubData',clubData)
    console.log('aboData',aboData)
    // console.log('data.data',data.data)

    let montantTotal  = 0
    for(let i =0;i<aboData.length;i++){
    montantTotal =(aboData[i].CasMedicaux +aboData[i].demenagement +aboData[i].lignesImpayeesMois +aboData[i].suspensionPro) *aboData[i].price;
    }

    Chart.register(CategoryScale,LinearScale,LineElement,PointElement);

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ];
    
    const graphData = {
      labels: labels,
      datasets: [
        {
          label: "test 1",
          data: [40,48,56,70,62,68,75,],
          borderColor: "#E64A19",
          backgroundColor: "transparent",
        },
        {
          label: "test 2",
          data: [40,42,47,55,49,52,59,],
          borderColor: "#ab86d0",
          backgroundColor: "transparent",
        },
      ],
    };

   
    return (
      <div>
        <p>Montant total : {montantTotal}</p>
        { <Box sx={{ width: "800px" }}>
        <Line data={graphData}/>
        </Box> }
      </div>
    );
  }
};
