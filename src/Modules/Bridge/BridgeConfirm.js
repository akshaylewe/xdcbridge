
import React, { useState } from "react";


import Header from "../Common/header"
import SideBar from "../Common/drawer";
import Box from '@mui/material/Box';
import { Divider } from "@mui/material";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Progress from "./Progress";
//Main Function
function BridgeConfirm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
      <>
    <Box>
      <Header />
      <SideBar />
      <div>
     <div className="main-head"> <p>Bridge</p></div>
      <div className="my-card my-card-second">
 <p className="review">Review Transaction</p>
 <Divider className="mb-23"/>
 <div className="image-flex">
     <img className="token-img" src="/images/XDC.svg" alt="sachin" ></img>
     <img src="/images/Arrow.svg" alt="sachin"></img>
     <img className="token-img" src="/images/ethereum.svg" alt="sachin"></img>
 </div>
 <div className="asset-flex">
<p>Asset</p>
<p className="second-p">XETH</p>
 </div>
 <Divider className="mb-23"/>
 <div className="asset-flex">
<p>Amount</p>
<p>100.00 XETH</p>
 </div>
 <Divider className="mb-23"/>
 <div className="asset-flex">
<p>Destination</p>
<p>0x91C2F0F67f02Ef1DcBc59ab44948B12dB90B7cA4</p>
 </div>
 <Divider className="mb-23"/>
 <div className="asset-flex">
<p>You will get</p>
<p>100.00 XETH</p>
 </div>
 <Divider className="mb-23"/>
 <div style={{display:"flex",justifyContent:"space-between"}}>
          <button className="cancel-button">Cancel</button>
          <button className="confirm-button" onClick={handleShow}>Confirm</button>
      </div>
      </div>
      
      </div>
    </Box>
    <Modal show={show}  animation={false}>
        <Modal.Header >
         <Progress />
        </Modal.Header>
        <Modal.Body></Modal.Body>
<div className="done">
<Button className="done-button" onClick={handleClose}>
            Done
          </Button>
</div>



      </Modal>
    </>
  );
}

export default BridgeConfirm;