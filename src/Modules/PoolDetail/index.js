import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import PoolDetails  from "./PoolDetail"

export default function PoolDetail() {
  return (
    <Box>
        <Header />
     <SideBar />
     <PoolDetails />
    </Box>
  );
}