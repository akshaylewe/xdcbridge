import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import HistoryCard  from "./History"


export default function Pool() {
  return (
    <Box>
        <Header />
     <SideBar />
     <HistoryCard />
    </Box>
  );
}
