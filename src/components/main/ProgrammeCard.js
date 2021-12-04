import * as React from 'react';
import './main.css';
import './ChipTap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChipsArray from './ChipTap';

const bull = (
  <Box
    component="span"
    className="disposition-card"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
  </Box>
);

const card1 = (
  <React.Fragment>
    <CardContent className="parameters-color">
      <Typography variant="h5" component="div">
        Contenu Programme
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
      <ChipsArray/>
    </CardContent>
    <CardActions className="link-card">
      <Button size="small" href="#">Visualisation</Button>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent className="parameters-color">
      <Typography gutterBottom variant="h5" component="div">
        Contenu Programme
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
      <ChipsArray/>
    </CardContent>
    <CardActions className="link-card">
      <Button size="small" href="#">Visualisation</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined" className="disposition">{card1}</Card>
      <Card variant="outlined" className="dispositionTATA">{card2}</Card>
    </Box>
  );
}
