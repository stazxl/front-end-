import * as React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
import { Avatar} from '@mui/material';

export default () => (
    <Card>
        <Title title="dashboard des simulations et des abonnés " />
        <CardContent>en cours de développement </CardContent>
        <Avatar
          alt="en cours de dev"
          src="https://www.plein-axe.com/ressources/images/travaux.png"
          sx={{ width: 100, height: 120, margin: 5 }}
        />

    </Card>
    
);