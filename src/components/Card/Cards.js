import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {IoMdSchool} from 'react-icons/io';


export default function Cards(props) {
  return (
    <Card sx={{ minWidth: 275, textAlign:'center' }}>
      <IoMdSchool style={{fontSize:'40px', marginTop:'10px'}}/>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Alunos sem estágio
        </Typography>
        <Typography variant="h5" component="div">
          180
        </Typography>
      </CardContent>
      
    </Card>
  );
}


