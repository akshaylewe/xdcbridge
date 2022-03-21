import React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Tab } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";

import "./PoolDetail.css";

const row = [
  {
    id: 1,
    Img: "/images/XDC.svg",
    Name: "XDC",
    Price: "$89,745",
    PriceChange: "USDC",
    Volume: "$89,745",
    TVL: "42,120",
  },
  {
    id: 2,
    Img: "/images/XDC.svg",
    Name: "XDC",
    Price: "$89,745",
    PriceChange: "USDC",
    Volume: "$89,745",
    TVL: "42,120",
  },
  {
    id: 3,
    Img: "/images/XDC.svg",
    Name: "XDC",
    Price: "$89,745",
    PriceChange: "USDC",
    Volume: "$89,745",
    TVL: "42,120",
  },
];
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function PoolDetails() {
  const classes = useStyles();

  return (
    <Box className="pool-box">
      <div style={{ display: "flex" }}>
        <button className="home-button">Home</button>
        {">"}
        <button className="home-button">Pool</button>
        {">"}
        <button className="home-button">XDC/USDC</button>
      </div>

      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <img src="/images/Tether.png"></img> &nbsp;
          <img src="/images/XDC.svg"></img> &nbsp;
          <button className="XDC-button">XDC</button>&nbsp;
          <button className="XDC-button">USDC</button>
        </div>
        <button className="add-liquidity" onClick={() => {window.location.href="add-liquidity"}}>
          Add Liquidity
        </button>
      </div>
      <br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              {" "}
              <div>
                <p className="heading-p">Pool Value</p>
                <p className="subheading-p">$442,295</p>
              </div>
              <Divider />
              <div>
                <p className="heading-p">Volume (24h)</p>
                <p className="subheading-p">$89,745</p>
              </div>
              <Divider />
              <div>
                <p className="heading-p">Fees (24h)</p>
                <p className="subheading-p">$21,442</p>
              </div>
              <Divider />
              <div>
                <p className="heading-p">APR</p>
                <p className="subheading-p">0.5%</p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>graph</Item>
          </Grid>
        </Grid>
      </Box>
      <br />
      <div className="pool-compo">
        <p>Pool Composition</p>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Token</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <img src={row.Img} />
                  &nbsp;{row.Name}
                </TableCell>
                <TableCell>{row.PriceChange}</TableCell>
                <TableCell>{row.Volume}</TableCell>
                <TableCell>{row.TVL}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div className="pool-compo">
        <p>Transactions</p>
      </div>

      <Tabs
        defaultActiveKey="All"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="All" title="All">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <img src={row.Img} />
                      &nbsp;{row.Name}
                    </TableCell>
                    <TableCell>{row.PriceChange}</TableCell>
                    <TableCell>{row.Volume}</TableCell>
                    <TableCell>{row.TVL}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
        <Tab eventKey="Swap" title="Swap">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <img src={row.Img} />
                      &nbsp;{row.Name}
                    </TableCell>
                    <TableCell>{row.PriceChange}</TableCell>
                    <TableCell>{row.Volume}</TableCell>
                    <TableCell>{row.TVL}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
        <Tab eventKey="Adds" title="Adds">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <img src={row.Img} />
                      &nbsp;{row.Name}
                    </TableCell>
                    <TableCell>{row.PriceChange}</TableCell>
                    <TableCell>{row.Volume}</TableCell>
                    <TableCell>{row.TVL}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Tab>
        <Tab eventKey="Removes" title="Removes">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Token</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <img src={row.Img} />
                      &nbsp;{row.Name}
                    </TableCell>
                    <TableCell>{row.PriceChange}</TableCell>
                    <TableCell>{row.Volume}</TableCell>
                    <TableCell>{row.TVL}</TableCell>
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

export default PoolDetails;
