import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import MarketCard  from "./Market"


export default function History() {
  return (
    <Box>
        <Header />
     <SideBar />
     <MarketCard />
    </Box>
  );
}
