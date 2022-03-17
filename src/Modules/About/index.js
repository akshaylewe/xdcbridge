import * as React from 'react';
import Box from '@mui/material/Box';
import Header from "../Common/header"
import SideBar from "../Common/drawer"
import About from "./About"

const drawerWidth = 240;
export default function ButtonAppBar() {
  return (
    <Box>
        <Header />
     <SideBar />
<About />
    </Box>
  );
}
