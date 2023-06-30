import React, { useState, useEffect, useRef } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { useParams } from "react-router-dom";
import { Chart } from "chart.js";
import { Box } from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
  const params = useParams();

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
    console.log("data", data.data);
    const montantTotal = data.data.casMedicaux * data.data.prixAbonnement;

    // const speedData = {
    //   labels: ["0", "10", "20", "30", "40", "50", "60"],
    //   datasets: [
    //     {
    //       label: "test",
    //       data: [
    //         0,
    //         data.casMedicaux,
    //         data.demenagement,
    //         data.lignesImpayeesMois,
    //         data.lignesImpayeesMois,
    //         data.suspensionPro,
    //         40,
    //       ],
    //       tension: 0.4,
    //       cubicInterpolationMode: "monotone",
    //       fill: false,
    //       borderColor: "#E64A19",
    //       backgroundColor: "transparent",
    //       borderDash: [20, 10, 60, 10],
    //       pointBorderColor: "#E64A19",
    //       pointBackgroundColor: "#FFA726",
    //       pointRadius: 5,
    //       pointHoverRadius: 10,
    //     },
    //   ],
    // };

    // const lineChart = new Chart(speedCanvasRef.current, {
    //   type: "line",
    //   data: speedData,
    // });

    return (
      <div>
        <p>Montant total : {montantTotal}</p>
        <Box sx={{ width: "800px" }}>
          {/* <canvas ref={speedCanvasRef} /> */}
        </Box>
      </div>
    );
  }
};
