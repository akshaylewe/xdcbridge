import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import PoolCard  from "./Pool"


export default function Pool() {
  return (
    <Box>
        <Header />
     <SideBar />
     <PoolCard />
    </Box>
  );
}
