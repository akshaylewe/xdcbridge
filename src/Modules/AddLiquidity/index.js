import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import Liquidity from './AddLiquidity';


export default function AddLiquidity() {
  return (
    <Box>
        <Header />
     <SideBar />
     <Liquidity />
    </Box>
  );
}
