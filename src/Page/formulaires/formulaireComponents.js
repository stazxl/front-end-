import {SaveButton, Toolbar} from 'react-admin'
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AddingDuration = (data) => {
    //"Import" des paramètres de durée/début des cas 
    const settingsParams=JSON.parse(localStorage.getItem('settingsParams'))
    const abonnements = data.abonnements

    // Début de l'ajout des paramètres de durée/début des cas dans les abonnements du formulaire
    for (let i=0;i<abonnements.length;i++){
        //Les données settings ne change pas donc on peux utiliser des chiffres fixes plutot que des variable qui change ( style let i = 0 dans une boucle)
        //Quand un abonnement est non engagé
        if(abonnements[i].engagement===false){
            abonnements[i].dureé_demenagement=settingsParams[0].dureé_demenagement
            abonnements[i].dureé_CasMedicaux=settingsParams[0].dureé_CasMedicaux
            abonnements[i].dureé_lignesImpayeesMois=settingsParams[0].dureé_lignesImpayeesMois
            abonnements[i].dureé_suspensionPro=settingsParams[0].dureé_suspensionPro
            abonnements[i].début_CasMedicaux=settingsParams[0].début_CasMedicaux
            abonnements[i].début_demenagement=settingsParams[0].début_demenagement
            abonnements[i].début_lignesImpayeesMois=settingsParams[0].début_lignesImpayeesMois
            abonnements[i].début_suspensionPro=settingsParams[0].début_suspensionPro
        }
        //Quand un abonnement est engagé
        else{
            abonnements[i].dureé_demenagement=settingsParams[1].dureé_demenagement
            abonnements[i].dureé_CasMedicaux=settingsParams[1].dureé_CasMedicaux
            abonnements[i].dureé_lignesImpayeesMois=settingsParams[1].dureé_lignesImpayeesMois
            abonnements[i].dureé_suspensionPro=settingsParams[1].dureé_suspensionPro
            abonnements[i].début_CasMedicaux=settingsParams[1].début_CasMedicaux
            abonnements[i].début_demenagement=settingsParams[1].début_demenagement
            abonnements[i].début_lignesImpayeesMois=settingsParams[1].début_lignesImpayeesMois
            abonnements[i].début_suspensionPro=settingsParams[1].début_suspensionPro

        }
    } 
    //Remplacement des anciennes données abo par les nouvelles
    data.abonnements=abonnements
    
    const finalData={...data}
    return(finalData)
}

export const SaveCreateToolbar =() => {
    return(
        <Toolbar>
            <SaveButton transform={AddingDuration} type="button"/>
        </Toolbar>
    )
}