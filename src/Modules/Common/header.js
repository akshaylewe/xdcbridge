import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';






export default function Drawer() {
  return (
    <AppBar position="static" style={{background: "#2149B9 0% 0% no-repeat padding-box"}}>
    <Toolbar>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       {""}
      </Typography>
      <Button color="inherit"><img src='/images/wallet.svg'></img></Button>
    </Toolbar>
  </AppBar>
    );
}
