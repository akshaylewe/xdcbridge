
import { Box } from "@mui/system";
import React, { useState } from 'react';
import {toast} from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";
import web3 from "../../utils/web3";
import xdc3 from "../../utils/xdc3";





export default function About() {
  const [buttonText, setButtonText] = useState("");

  function OnConnect() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // accountChangeHandler(result[0]); //accounts can be a array we just wanna grab first one
          console.log(result[0]);
          // window.location.pathname = "/wallet";
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Install Metamask");
      // setErrorMssg("Install Metamask");
      toast.success("Connect Wallet");
    }
  }


  web3.eth.getAccounts(function (err, accounts) {
    if (err != null) console.error("An error occurred: " + err);
    else if (accounts.length == 0) setButtonText("Connect Wallet");
    else setButtonText("Wallet Connected");
  });



  return (
    <div>
      <Box
        className="content-box"
        display="grid"
        alignItems="center"
        justifyContent="center"
      >
        <h2>Welcome to SmartSwap</h2>
        <Button onClick={OnConnect} className="connect-wallet" variant="primary">
        <img src='/images/wallet.svg'></img>
        {buttonText}
        </Button>{" "}
      </Box>
      <Grid item xs={12} style={{ marginTop: "52px" }}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Paper
              sx={{
                height: 327,
                width: 230,
              }}
              className="card-paper"
            >
              <img src="/images/Swap (1).svg" alt="swap"></img>
              <p className="p-heading">BRIDGE</p>
              <p className="p-subheading">Transfer data (e.g. digital asset ownership information) between two chains</p>
            </Paper>
          </Grid>

          <Grid item>
            <Paper
              sx={{
                height: 327,
                width: 230,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className="card-paper"
            >
              <img src= "/images/Swap (1).svg" alt="swap"></img>
              <p className="p-heading">SWAP</p>
              <p className="p-subheading">Swap tokens supported on XDC Network</p>
            </Paper>
          </Grid>

          <Grid item>
            <Paper
              sx={{
                height: 327,
                width: 230,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className="card-paper"
            >
              <img src= "/images/pool.svg" alt="swap"></img>
              <p className="p-heading">POOL</p>
              <p className="p-subheading">Add your token pair to the pool and earn whenever there is a swap</p>
            </Paper>
          </Grid>

          <Grid item>
            <Paper
              sx={{
                height: 327,
                width: 230,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
              className="card-paper"
            >
              <img src= "/images/market.svg" alt="swap"></img>
              <p className="p-heading">Market</p>
              <p className="p-subheading">Analyse the top performing tokens and pairs</p>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
