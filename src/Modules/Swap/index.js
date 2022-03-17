import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import SwapCard  from "./Swap"


export default function Swap() {
  return (
    <Box>
        <Header />
     <SideBar />
     <SwapCard />
    </Box>
  );
}
