import React from "react";
import { Box } from "@mui/material";
import Tabs from "react-bootstrap/Tabs";

import { Tab } from "react-bootstrap";
import Faq from "react-faq-component";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@mui/icons-material/Search";

import "./Pool.css";
import { NoBackpackSharp } from "@mui/icons-material";



  
  const rows = [
    {
        "ActionImg":"/images/Add.svg",
       "Action":"Add XDC and Ropsten",
       "Tokens":"521,120",
       "TokensImg":"/images/XDC.svg",
       "TokensTo":"42,120",
       "TokensToImg":"/images/Tether.png",
       "Value":"$85,207.26",
       "Time":"5 min ago"
    },
    {
        "ActionImg":"/images/swapSmall.png",
        "Action":"Add XDC and USDC",
        "Tokens":"521,120",
        "TokensImg":"/images/XDC.svg",
        "TokensTo":"42,120",
        "TokensToImg":"/images/Tether.png",
        "Value":"$85,207.26",
        "Time":"5 min ago"
    },
    {
        "ActionImg":"/images/swapSmall.png",
        "Action":"Add XDC and USDC",
        "Tokens":"521,120",
        "TokensImg":"/images/XDC.svg",
        "TokensTo":"42,120",
        "TokensToImg":"/images/Tether.png",
        "Value":"$85,207.26",
        "Time":"5 min ago"
    }
 ]

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
function HistoryCard() {
    const classes = useStyles();
  return (
    <Box className="pool-box">
      <div className="investment-div">
        <p>History</p>
      </div>
      <div className="filter-Export">
        <button className="filter-button mr12">Filter</button>
        <button className="filter-button">Export</button>
      </div>
      <Tabs
        defaultActiveKey="Top Tokens"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Top Tokens" title="Complete">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell align="left">#</TableCell> */}
                  <TableCell>Action</TableCell>
                  <TableCell>Tokens</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Time</TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    {/* <TableCell component="th" scope="row">
                      {row.number}
                    </TableCell> */}
                    <TableCell><img src={row.ActionImg} />&nbsp;&nbsp;{row.Action}</TableCell>
                    <TableCell><img src={row.TokensImg} />&nbsp;&nbsp;{row.Tokens}&nbsp;&nbsp;&nbsp;&nbsp;<img src={row.TokensToImg} />&nbsp;&nbsp;{row.TokensTo}</TableCell>
                    <TableCell>{row.Value}</TableCell>
                    <TableCell>{row.Time}</TableCell>
                    {/* <TableCell>{row.apr}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
        <Tab eventKey="Your Liquidity" title="Pending">
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell align="left">#</TableCell> */}
                  <TableCell>Action</TableCell>
                  <TableCell>Tokens</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Time</TableCell>
                
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    {/* <TableCell component="th" scope="row">
                      {row.number}
                    </TableCell> */}
                    <TableCell><img src={row.ActionImg} />&nbsp;&nbsp;{row.Action}</TableCell>
                    <TableCell><img src={row.TokensImg} />&nbsp;&nbsp;{row.Tokens}&nbsp;&nbsp;&nbsp;&nbsp;<img src={row.TokensToImg} />&nbsp;&nbsp;{row.TokensTo}</TableCell>
                    <TableCell>{row.Value}</TableCell>
                    <TableCell>{row.Time}</TableCell>
                    {/* <TableCell>{row.apr}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
      </Tabs>


    </Box>
  );
}

export default HistoryCard;
