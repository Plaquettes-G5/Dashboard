import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, color: "secondary", label: 'Soft-Skills' },
    { key: 1, color: "secondary", label: 'Cloud & Cyber Security' },
    { key: 2, color: "secondary", label: 'Apps & Design' },
    { key: 3, color: "secondary", label: 'Data' },
    { key: 4, color: "secondary", label: 'Internet of things' },
  ])
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {

        return (
          <ListItem key={data.key}>
            <Chip
              color={data.color}
              label={data.label}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
