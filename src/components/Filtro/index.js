import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export default function Filtro() {
    return (
      <div className='filtro__container'>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Filtro" variant="standard" />
        </Box>
      </Box>
      </div>
    );
  }
