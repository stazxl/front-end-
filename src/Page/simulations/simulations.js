import React, { useState, useEffect, useRef } from "react";
import { List, Datagrid, TextField, FileField } from "react-admin";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryScale,Chart,Utils, LinearScale,LineElement,Tooltip,PointElement } from "chart.js";
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

    //Début calcul du montant total des abonnements
    let montantTotalAA  = 0
    let montantTotalNormal  = 0
    for(let i =0;i<aboData.length;i++){
      if(aboData[i].engagement===true){
        if(aboData[i].dureé_CasMedicaux>6){
          aboData[i].dureé_CasMedicaux=6
        }
        if(aboData[i].dureé_demenagement>6){
          aboData[i].dureé_demenagement=6
        }
        if(aboData[i].dureé_lignesImpayeesMois>6){
          aboData[i].dureé_lignesImpayeesMois=6
        }
        if(aboData[i].dureé_suspensionPro>6){
          aboData[i].dureé_suspensionPro=6
        }
      }
      else{
        aboData[i].dureé_CasMedicaux=0
        aboData[i].dureé_demenagement=0
        aboData[i].dureé_lignesImpayeesMois=0
        aboData[i].dureé_suspensionPro=0
      }

      montantTotalNormal=montantTotalNormal
        // (Nombre de cas x Mois de l'incident) x Prix de l'abonnement
        +(aboData[i].CasMedicaux*aboData[i].début_CasMedicaux)*aboData[i].price
        +(aboData[i].demenagement*aboData[i].début_demenagement) *aboData[i].price
        +(aboData[i].lignesImpayeesMois*aboData[i].début_lignesImpayeesMois) *aboData[i].price
        +(aboData[i].suspensionPro*aboData[i].début_suspensionPro)*aboData[i].price
        // (Nombre d'Abonnement - Nombre de cas ) x 12 mois) x Prix de l'abonnement
        +((aboData[i].nombreAbonné-(aboData[i].CasMedicaux+aboData[i].demenagement+aboData[i].lignesImpayeesMois+aboData[i].suspensionPro))*12)*aboData[i].price
    
      montantTotalAA =montantTotalAA
        // (Nombre de cas x (Mois de l'incident + Durée de incident)) x Prix de l'abonnement
        +(aboData[i].CasMedicaux*(aboData[i].début_CasMedicaux+aboData[i].dureé_CasMedicaux))*aboData[i].price
        +(aboData[i].demenagement*(aboData[i].début_demenagement+aboData[i].dureé_demenagement)) *aboData[i].price
        +(aboData[i].lignesImpayeesMois*(aboData[i].début_lignesImpayeesMois+aboData[i].dureé_lignesImpayeesMois)) *aboData[i].price
        +(aboData[i].suspensionPro*(aboData[i].début_suspensionPro+aboData[i].dureé_suspensionPro))*aboData[i].price
        // (Nombre de cas x Durée avant incident) x Prix de l'abonnement
        +((aboData[i].nombreAbonné-(aboData[i].CasMedicaux+aboData[i].demenagement+aboData[i].lignesImpayeesMois+aboData[i].suspensionPro))*12)*aboData[i].price
      
    }
    //Fin calcul du montant total des abonnements
    
    //Mise en forme de montantTotal
    montantTotalNormal=montantTotalNormal+ " €"
    montantTotalAA=montantTotalAA+ " €"

    
    let datasets=[
      {
        label: "Prévision sans Assur-Abo",
        borderColor: "#1E38DF",
        backgroundColor: "transparent",
        hoverOffset:2
      },
      {
        label: "Prévision avec Assur-Abo",
        borderColor: "#F024F3",
        backgroundColor: "transparent",
        hoverOffset:2
      }
    ]

    let totalMonthNormal = 0
    let totalMonthAA = 0

    let normalData=[]
    let aaData=[]

    //Début des données du graphique
    for(let j=0;j<aboData.length;j++){  
      for(let k =0;k<12;k++){
        //Pour les cas médicaux
        if(k<aboData[j].début_CasMedicaux){
          // Montant total du mois j = Montant total du mois j*  + (Prix abonnement x Nombre de cas ) 
          // * pour calculer le montant en plus des autres cas
          totalMonthNormal = totalMonthNormal+(aboData[j].price*aboData[j].CasMedicaux)
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].CasMedicaux)
        }
        else if(k<(aboData[j].début_CasMedicaux+aboData[j].dureé_CasMedicaux)){
          //Montant total du mois j = Montant total du mois j ( ) 
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].CasMedicaux)
        }
        else{
          // Pour les Cas maladie et Impayés, ils doivent reprendre le contrat après la fin de leurs arrêts Maladie
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].CasMedicaux)
        }
        //Pour les Cas d'arrêt maladie j'aurais pu faire un else if direct après le if pour optimiser le code

        //Pour les déménagements
        if(k<aboData[j].début_demenagement){
          totalMonthNormal = totalMonthNormal+(aboData[j].price*aboData[j].demenagement)
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].demenagement)
          
        }
        else if(k<(aboData[j].début_demenagement+aboData[j].dureé_demenagement)){
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].demenagement)
        }

        //Pour les Impayés
        if(k<aboData[j].début_lignesImpayeesMois){
          totalMonthNormal = totalMonthNormal+(aboData[j].price*aboData[j].lignesImpayeesMois)
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].lignesImpayeesMois)
        }
        else{
          // Optimisations du code en question ( voir notes Cas maladie)
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].lignesImpayeesMois)
        }

        //Pour les suspensions Professionnels
        if(k<aboData[j].début_suspensionPro){
          totalMonthNormal = totalMonthNormal+(aboData[j].price*aboData[j].suspensionPro)
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].suspensionPro)
        }
        else if(k<(aboData[j].début_suspensionPro+aboData[j].dureé_suspensionPro)){
          totalMonthAA = totalMonthAA+(aboData[j].price*aboData[j].suspensionPro)
        }

        //Penser a rajouter le revenue stable de la salle de sport ( abonnés sans incidents)
        totalMonthNormal =totalMonthNormal+ ((aboData[j].nombreAbonné-(aboData[j].CasMedicaux+aboData[j].demenagement+aboData[j].lignesImpayeesMois+aboData[j].suspensionPro))*12)*aboData[j].price
        totalMonthAA = totalMonthAA+((aboData[j].nombreAbonné-(aboData[j].CasMedicaux+aboData[j].demenagement+aboData[j].lignesImpayeesMois+aboData[j].suspensionPro))*12)*aboData[j].price
        
        //Ajout du montant mensuel dans leurs tableaux respectifs
        normalData[k]=totalMonthNormal
        aaData[k]=totalMonthAA

        //Ajout du montant mensuel dans leurs tableaux respectifs
        totalMonthNormal = 0
        totalMonthAA = 0
      }
    }
    datasets[0].data = normalData
    datasets[1].data = aaData
    //Fin des données du graphique


    Chart.register(CategoryScale,LinearScale,LineElement,Tooltip,PointElement);

    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    
    const graphData = {
      active:true,
      labels: labels,
      datasets: datasets,
      hoverOffset: 4,
    };

    const graphOptions={
      hover: {
        mode: 'nearest',
        intersect: false,
      },
      tooltips: {
        mode: 'index',
      },
    }

    return (
      <div>
        <p>Montant total Normal : {montantTotalNormal}</p>
        <p>Montant total avec Assur-Abo : {montantTotalAA}</p>
        <Box sx={{ width: "800px" }}>
        <Line data={graphData}
        options={graphOptions}/>
        </Box>
      </div>
    );
  }
};
