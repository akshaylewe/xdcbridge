import React from "react";
import "./Card.css";
import BridgeCard from "./Bridge";
import Header from "../Common/header"
import SideBar from "../Common/drawer";
import Box from '@mui/material/Box';

function Card() {
  return (
   
    <Box>
      <Header />
      <SideBar />
      <div className="my-card">
      <BridgeCard />
      </div>
    </Box>
    
  );
}

export default Card;